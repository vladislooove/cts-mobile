export interface FactorListItem {
  value: string;
  key: string;
  id: string;
}

export interface FactorsListProps {
  searchText: string;
  onSelectFactor: (item: FactorListItem) => void;
  selectedFactors: FactorListItem[];
}
