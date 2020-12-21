export interface TileProps {
  name: string;
  system: string;
  active?: boolean;
  onSelect: () => void;
}