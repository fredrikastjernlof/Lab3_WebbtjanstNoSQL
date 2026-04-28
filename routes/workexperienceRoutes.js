//Importerar paket
const express = require('express');
const WorkExperience = require('../models/WorkExperience');
const router = express.Router();

// Validerar inkommande data (backend-skydd för databasen)
function validateWorkExperience(data) {
    const { companyname, jobtitle, location, startdate, description } = data;

    if (
        !companyname?.trim() ||
        !jobtitle?.trim() ||
        !location?.trim() ||
        !startdate ||
        !description?.trim()
    ) {
        return false;
    }

    return true;
}

//Routes

// Hämtar alla poster
router.get('/', async (req, res) => {
    try {
        const workExperiences = await WorkExperience.find().sort({ createdAt: -1 });
        res.json(workExperiences);
    } catch (error) {
        res.status(500).json({ message: 'Could not fetch work experiences' });
    }
});

// Hämtar en specifik post baserat på id
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const workExperience = await WorkExperience.findById(id);

        if (!workExperience) {
            return res.status(404).json({ message: 'Work experience not found' });
        }

        res.json(workExperience);
    } catch (error) {
        res.status(500).json({ message: 'Could not fetch work experience by id' });
    }
});


// Skapar ny post i databasen
router.post('/', async (req, res) => {

    // Kontrollerar om obligatoriska fält saknas eller är tomma
    if (!validateWorkExperience(req.body)) {
        return res.status(400).json({ message: 'Required fields are missing or empty' });
    }

    try {
        const newWorkExperience = new WorkExperience(req.body);
        const savedWorkExperience = await newWorkExperience.save();

        res.status(201).json(savedWorkExperience);
    } catch (error) {
        res.status(500).json({message: 'Could not insert work experience'});
    }
});

// Uppdaterar en befintlig post baserat på id
router.put('/:id', async (req, res) => {

    // Kontrollerar om obligatoriska fält saknas eller är tomma
    if (!validateWorkExperience(req.body)) {
        return res.status(400).json({ message: 'Required fields are missing or empty' });
    }

    const { id } = req.params;
    
    try {
        const updated = await WorkExperience.findByIdAndUpdate(
            id, 
            req.body, 
            { new: true } // Returnerar den uppdaterade posten i svaret
        );

        if (!updated) {
            return res.status(404).json({ message: 'Work experience not found' });
        }

        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Could not update work experience' });
    }
});

// Raderar en post baserat på id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await WorkExperience.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Work experience not found' });
        }

        res.json({ message: 'Work experience deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Could not delete work experience' });
    }
});

module.exports = router;