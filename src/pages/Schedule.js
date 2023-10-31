import { Button, Input, Radio, Table, Typography } from 'antd';
import React, { useState } from 'react';

const plainOptions = ['Hiện diện', 'Vắng'];

const result = [{ title: 'Kết quả', dataIndex: 'content' }];

const Schedule = () => {
  const onChangePresent = (key, value) => {
    const updatedData = data.map((item) => {
      if (item.key === key) {
        return { ...item, attendence: value };
      }
      return item;
    });

    setData(updatedData);
  };

  const columns = [
    {
      title: 'MSSV',
      dataIndex: 'key',
      width: '10%',
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
    },
    {
      title: 'Điểm danh',
      dataIndex: 'attendence',
      render: (text, record) => (
        <Radio.Group
          options={plainOptions}
          onChange={(e) => onChangePresent(record.key, e.target.value)}
          value={record.attendence}
        />
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: 'SE12341',
      name: 'Nguyen Van A',
      attendence: 'Vắng',
    },
    {
      key: 'SE12342',
      name: 'Nguyen Van B',
      attendence: 'Vắng',
    },
    {
      key: 'SE12343',
      name: 'Nguyen Van C',
      attendence: 'Vắng',
    },
    {
      key: 'SE12344',
      name: 'Nguyen Van D',
      attendence: 'Vắng',
    },
    {
      key: 'SE12345',
      name: 'Nguyen Van E',
      attendence: 'Vắng',
    },
    {
      key: 'SE12346',
      name: 'Nguyen Van F',
      attendence: 'Vắng',
    },
    {
      key: 'SE12347',
      name: 'Nguyen Van G',
      attendence: 'Vắng',
    },
    {
      key: 'SE12348',
      name: 'Nguyen Van H',
      attendence: 'Vắng',
    },
    // {
    //   key: 'SE12349',
    //   name: 'Nguyen Van I',
    //   attendence: 'Vắng',
    // },
    // {
    //   key: 'SE12350',
    //   name: 'Nguyen Van K',
    //   attendence: 'Vắng',
    // },
  ]);

  const dataResult = [
    { key: '1', content: 'Số học sinh vắng: 2 ' },
    { key: '2', content: 'Học sinh nghỉ quá 20%: 0 ' },
  ];

  return (
    <>
      <Typography.Title level={4}>Lớp OD6101</Typography.Title>
      <Typography.Title level={4}>Slot 4</Typography.Title>
      <div className='attendence-tables'>
        <div className='attendence-table'>
          <Input placeholder='Tìm kiếm theo tên' />
          <Table
            columns={columns}
            dataSource={data}
            rowKey={(data) => data.key}
            pagination={false}
          />
        </div>

        <div className='result-table'>
          <Button>Tìm kiếm</Button>
          <Table
            columns={result}
            dataSource={dataResult}
            rowKey={(data) => data.key}
            pagination={false}
          />
        </div>
      </div>
      <div className='submit-attendence'>
        <Button>Gửi</Button>
      </div>
    </>
  );
};

export default Schedule;
