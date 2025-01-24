import { useEffect, useState } from 'react';
import { Table } from '@chakra-ui/react';

const UserDataList = () => {
  const [userData, setUserData] = useState(() => {
    const data = localStorage.getItem('formData');
    return data ? JSON.parse(data) : null;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const data = localStorage.getItem('formData');
      setUserData(data ? JSON.parse(data) : null);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const dataList = [
    {
      label: 'Страна путешествия',
      value: userData?.country?.name || 'Не указано',
    },
    {
      label: 'Тип покрытия',
      value: userData?.coverageType || 'Не указано',
    },
    {
      label: 'Начало страхования',
      value: userData?.startDate
        ? new Date(userData.startDate).toLocaleDateString()
        : 'Не указано',
    },
    {
      label: 'Конец страхования',
      value: userData?.endDate
        ? new Date(userData.endDate).toLocaleDateString()
        : 'Не указано',
    },
    { label: 'Цель', value: userData?.target || 'Не указано' },
    {
      label: 'Номер телефона',
      value: userData?.phoneNumber || 'Не указан',
    },
  ];

  return (
    <Table.Root size="sm">
      <Table.Body>
        {dataList.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell>{item.label}</Table.Cell>
            <Table.Cell>{item.value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default UserDataList;
