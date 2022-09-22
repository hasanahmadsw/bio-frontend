export interface IBiography {
  summary: string;
  name: string;
  title: string;
  birthday: string;
  nationality: string;
  address: string;
  phone: string;
  email: string;
}

export interface IAdmin {
  _id: string;
  name: string;
  email: string;
  password: string;
}
export type LoginAdmin = Omit<IAdmin, "_id" | "name">;
export interface IExperience {
  title: string;
  breif: string;
  company: string;
  date: string;
  location: string;
}

export interface IEducation {
  title: string;
  breif: string;
  university: string;
  date: string;
}

export interface ICertificate {
  title: string;
  breif: string;
  source: string;
  date: string;
}

export interface IService {
  title: string;
  breif: string;
}

export interface ISocialMedia {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  whatsapp?: string;
  github?: string;
  twitter?: string;
  telegtam?: string;
}

export type Tag =
  | "Node"
  | "React"
  | "Next"
  | "Nest"
  | "Express"
  | "Typescript"
  | "Software Engineering";

export const tagFilters: Tag[] = [
  "Software Engineering",
  "React",
  "Next",
  "Nest",
  "Node",
  "Express",
  "Typescript",
];

export interface MetaData {
  title: string;
  dateString: string;
  mainImageUrl: string;
  excerpt: string;
  tags: Tag[];
  featured: string;
  keywords: string;
}

export interface IPost {
  slug: string;
  metaData: MetaData;
}
