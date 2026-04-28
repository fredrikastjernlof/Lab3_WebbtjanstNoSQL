// Använder Mongoose för att definiera schema och modell för arbetserfarenhet
const mongoose = require('mongoose');

// Definierar schema för arbetserfarenhet
const workExperienceSchema = new mongoose.Schema(
    {
        companyname: { 
            type: String, 
            required: true, 
            trim: true 
        },
        jobtitle: { 
            type: String, 
            required: true, 
            trim: true 
        },
        location: { 
            type: String, 
            required: true, 
            trim: true 
        },
        startdate: { 
            type: Date, 
            required: true 
        },
        enddate: { 
            type: Date, 
            required: false 
        },
        description: { 
            type: String, 
            required: true, 
            trim: true 
        },
    },
    { 
        timestamps: true 
    }
);

// Exporterar modellen
module.exports = mongoose.model('WorkExperience', workExperienceSchema);