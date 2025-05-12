export type ProjectStatus = "completed" | "in-progress";

export interface Project {
	id: string;
	title: string;
	description: string;
	stack: string[];
	github: string;
	site?: string;
	demo?: string;
	image?: string;
	status: ProjectStatus;
}
