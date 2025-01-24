export interface Country {
  id: number;
  name: string;
  isInSchengen: number;
  programs: {
    id: number;
    name: string;
    liability: null;
    coverages: null;
  }[];
}
