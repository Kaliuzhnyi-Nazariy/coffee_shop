export interface INews {
  date: string;
  source: string;
  image: string;
  title: string;
  description: string;
  [key: string]: unknown;
}
