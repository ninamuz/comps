
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

export default function SortableTable(props) {
  const { config, data } = props;
  const {
    sortOrder,
    sortBy,
    sortedData,
    setSortColumnLabel } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th className='cursor-pointer hover:bg-gray-100'
          onClick={() => setSortColumnLabel(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return (
    <Table {...props} data={sortedData} config={updatedConfig} />
  );
}
// react-icons
function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return <div>
      <GoArrowSmallUp />
      <GoArrowSmallDown />
    </div>;
  }

  if (sortOrder === null) {
    return <div>
      <GoArrowSmallUp />
      <GoArrowSmallDown />
    </div>;
  } else if (sortOrder === 'asc') {
    return <GoArrowSmallUp />;
  } else if (sortOrder === 'desc') {
    return <GoArrowSmallDown />;
  }
}
