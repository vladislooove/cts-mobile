// Constants
import { SYSTEM_CATEGORIES } from '../../screens/System/constants';

// Types
import { FactorsBySystem, FactorsByType } from './types';
import { Factor } from '../../services/system/types';

export const sortFactorsInCategory = (system: any) => {
  const res: any = {};
  const types = Object.keys(system);

  types.forEach((type) => {
    const arrayToSort = system[type].slice();
    res[type] = arrayToSort.sort((a, b) => a.name.localeCompare(b.name));
  });

  return res;
};

export const createCategoryWithFactors = (category: string, factors: Factor[]) => {
  const res: any = { [category]: {} };
  const objToUpdate = res[category];

  factors.forEach((factor) => {
    if (!objToUpdate[factor.type]) {
      objToUpdate[factor.type] = [];
    }
    objToUpdate[factor.type].push(factor);
  });
  return res;
};

export const formatFactorsCustomisation = (factors: Factor[] = [], ccg = '') => {
  factors.forEach((item) => {
    if (item && item.customizations) {
      item.customizations.forEach((customItem) => {
        if (customItem.ccgId === ccg) {
          item.categories = [...(item.categories || []), ...(customItem.categories || [])]
            .sort()
            .filter((i, pos, ary) => !pos || i !== ary[pos - 1]);
        }
      });
    }
  });

  return factors;
};

export const filterFactorsBySystems = (factors: Factor[] = [], ccg = '') => {
  const systemsCategories = SYSTEM_CATEGORIES
    .filter((system) => system.category !== 'COMBINED')
    .map((system) => system.category);

  let formattedSystems: any = {};
  systemsCategories.forEach((category) => {
    const factorsForSystem = formatFactorsCustomisation(factors, ccg).filter(
      ({ categories }) => categories && categories.includes(category),
    );

    const categoryWithFactors = createCategoryWithFactors(category, factorsForSystem);
    formattedSystems = Object.assign(formattedSystems, categoryWithFactors);
  });

  const systems = Object.keys(formattedSystems);
  systems.forEach((system) => {
    const currSystem = formattedSystems[system];
    formattedSystems[system] = sortFactorsInCategory(currSystem);
  });
  return formattedSystems;
};

export const getFactorsByCategories = (factors: Factor[] = [], categories = []) => {
  const activeFactors: any = {};

  categories.forEach((factor) => {
    const currentFactor: any = factors[factor];
    if (currentFactor) {
      Object.keys(currentFactor).forEach((factorKey) => {
        const factorsWithDublicates = [...(activeFactors[factorKey] || []), ...(currentFactor[factorKey] || [])];

        activeFactors[factorKey] = activeFactors[factorKey] || [];

        factorsWithDublicates.forEach((item) => {
          if (!activeFactors[factorKey].find((uniqItem) => uniqItem.id === item.id)) {
            activeFactors[factorKey].push(item);
          }
        });
      });
    }
  });

  return activeFactors;
};

export const mergeFactorsBySystems = (
  factorsBySystems: FactorsBySystem,
  systems: string[],
) => {
  const factorsByTypes: FactorsByType = {};
  const filteredFactorsBySystem = Object.entries(factorsBySystems).filter(
    ([system]) => systems.includes(system),
  ).map(([system, itemsByType]) => itemsByType);

  filteredFactorsBySystem.forEach((itemByType) => {
    Object.entries(itemByType).forEach(([type, factors]) => {
      const items: Factor[] = (itemByType as any)[type] ?? [];

      factors.forEach((item) => {
        if (!items.find(({ id }) => id === item.id)) {
          items.push(item);
        }
      });

      (factorsByTypes as any)[type] = items;
    })
  });

  return factorsByTypes;
}