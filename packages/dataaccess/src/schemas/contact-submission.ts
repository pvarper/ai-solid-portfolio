import { z } from "zod";

const MESSAGE_MIN_LENGTH = 10;

export const ContactSubmissionSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  message: z.string().min(MESSAGE_MIN_LENGTH),
  submittedAt: z.iso.datetime(),
});

export type ContactSubmission = z.infer<typeof ContactSubmissionSchema>;
