const mongoose = require('mongoose');

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

module.exports = mongoose.model('WorkExperience', workExperienceSchema);