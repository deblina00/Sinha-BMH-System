export interface Application {
 _id: string;

    fullName: string;

    email: string;

    phone: string;

    job: {
        _id: string;
        title: string;
    };

    experience: string;

    coverLetter: string;

    resumeUrl: string;

    status:
    | "Pending"
    | "Shortlisted"
    | "Interview Scheduled"
    | "Selected"
    | "Rejected";

    createdAt: string;
}