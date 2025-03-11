import { v4 as uuidv4 } from 'uuid';

export const initialJobs = [
    {
      id: uuidv4(),
      company: 'Google',
      position: 'Software Engineer',
      dateApplied: '2023-10-01',
      status: 'Applied',
    },
    {
      id: uuidv4(),
      company: 'Amazon',
      position: 'Frontend Developer',
      dateApplied: '2023-10-05',
      status: 'Interviewing',
    },
    {
      id: uuidv4(),
      company: 'Microsoft',
      position: 'Product Manager',
      dateApplied: '2023-10-10',
      status: 'Offer',
    },
    {
      id: uuidv4(),
      company: 'Netflix',
      position: 'UI/UX Designer',
      dateApplied: '2023-10-15',
      status: 'Rejected',
    },
  ];