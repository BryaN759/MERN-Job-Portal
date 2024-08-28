import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'seeker' | 'recruiter';
    phone?: string;
    location?: string;
    bio?: string;
    website?: string;
    socialLinks?: {
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
    experience?: {
        company: string;
        position: string;
        startDate: Date;
        endDate?: Date;
        description?: string;
    }[];
    education?: {
        institution: string;
        degree: string;
        fieldOfStudy: string;
        startDate: Date;
        endDate?: Date;
        description?: string;
    }[];
    skills?: string[];
    resume?: string; // URL or file path to the resume
    profilePicture?: string; // URL or file path to the profile picture
    companyName?: string; // For recruiters
    companyDetails?: {
        website?: string;
        size?: string;
        industry?: string;
        logo?: string; // URL or file path to the company logo
    };
    jobPostings?: Schema.Types.ObjectId[]; // Array of job posting IDs for recruiters
    appliedJobs?: Schema.Types.ObjectId[]; // Array of applied job IDs for seekers
    bookmarks?: Schema.Types.ObjectId[]; // Array of bookmarked job posting IDs
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['seeker', 'recruiter'], required: true },
        phone: { type: String },
        location: { type: String },
        bio: { type: String },
        website: { type: String },
        socialLinks: {
            linkedin: { type: String },
            github: { type: String },
            twitter: { type: String }
        },
        experience: [
            {
                company: { type: String, required: true },
                position: { type: String, required: true },
                startDate: { type: Date, required: true },
                endDate: { type: Date },
                description: { type: String }
            }
        ],
        education: [
            {
                institution: { type: String, required: true },
                degree: { type: String, required: true },
                fieldOfStudy: { type: String, required: true },
                startDate: { type: Date, required: true },
                endDate: { type: Date },
                description: { type: String }
            }
        ],
        skills: { type: [String] },
        resume: { type: String },
        profilePicture: { type: String },
        companyName: { type: String },
        companyDetails: {
            website: { type: String },
            size: { type: String },
            industry: { type: String },
            logo: { type: String }
        },
        jobPostings: [{ type: Schema.Types.ObjectId, ref: 'Job' }], // For recruiters
        appliedJobs: [{ type: Schema.Types.ObjectId, ref: 'Job' }], // For seekers
        bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Job' }]
    },
    {
        timestamps: true
    }
);

export const User = model<IUser>('User', userSchema);
