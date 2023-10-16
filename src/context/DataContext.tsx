import { createContext } from 'react';
import { DataServicesIBGETypes } from '../types';

type DataContextProps = {
  result: DataServicesIBGETypes | undefined;
  getApiIBGE: (url: string) => Promise<void>;
};

const DataContext = createContext({} as DataContextProps);
export default DataContext;
