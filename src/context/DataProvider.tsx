import useApiIBGE from '../hooks/useApiIBGE';
import DataContext from './DataContext';

type DataProviderProps = {
  children: React.ReactNode;
};
function DataProvider({ children }: DataProviderProps) {
  const { result, getApiIBGE } = useApiIBGE();
  const context = {
    result,
    getApiIBGE,
  };
  return (
    <DataContext.Provider value={ context }>
      {children}
    </DataContext.Provider>
  );
}
export default DataProvider;
