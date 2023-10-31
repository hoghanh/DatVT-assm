import { Table } from 'antd';
import React from 'react';

const CourseAttendance = () => {
  const columns = [
    {
      title: 'Key',
      dataIndex: 'key',
      width: '20%',
    },
    {
      title: 'content',
      dataIndex: 'content',
    },
  ];
  const data = [
    {
      key: 'Campus',
      content: 'HCM',
    },
    {
      key: 'Học kỳ',
      content: 'Spring 2021',
    },
    {
      key: '',
      content: 'Summer 2021',
    },
    {
      key: '',
      content: 'Fall 2021',
    },
    {
      key: '',
      content: 'Spring 2022',
    },
    {
      key: '',
      content: 'Summer 2022',
    },
    {
      key: '',
      content: 'Fall 2022',
    },
    {
      key: '',
      content: 'Spring 2023',
    },
    {
      key: '',
      content: 'Summer 2023',
    },
    {
      key: '',
      content: 'Fall 2023',
    },
  ];

  return (
    <>
      <div className='course-attendance'>
        <Table
          columns={columns}
          dataSource={data}
          showHeader={false}
          rowKey={(data) => `${data.key} + ${data.content}`}
          pagination={false}
        />
      </div>
    </>
  );
};

export default CourseAttendance;
