import { Button, Input, Radio, Table, Typography } from 'antd';
import React, { useState } from 'react';

const plainOptions = ['Hiện diện', 'Vắng'];

const result = [{ title: 'Kết quả', dataIndex: 'content' }];

const ClassSchedule = () => {
  const onChangePresent = (key, value) => {
    const updatedData = data.map((item) => {
      if (item.key === key) {
        return { ...item, attendance: value };
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
      dataIndex: 'attendance',
      render: (text, record) => (
        <Radio.Group
          options={plainOptions}
          onChange={(e) => onChangePresent(record.key, e.target.value)}
          value={record.attendance}
        />
      ),
    },
  ];
  const [data, setData] = useState([
    {
      key: 'SE12341',
      name: 'Nguyễn Văn A',
      attendance: 'Vắng',
    },
    {
      key: 'SE12342',
      name: 'Nguyễn Văn B',
      attendance: 'Vắng',
    },
    {
      key: 'SE12343',
      name: 'Nguyễn Văn C',
      attendance: 'Vắng',
    },
    {
      key: 'SE12344',
      name: 'Nguyễn Văn D',
      attendance: 'Vắng',
    },
    {
      key: 'SE12345',
      name: 'Nguyễn Văn E',
      attendance: 'Vắng',
    },
    {
      key: 'SE12346',
      name: 'Nguyễn Văn F',
      attendance: 'Vắng',
    },
    {
      key: 'SE12347',
      name: 'Nguyễn Văn G',
      attendance: 'Vắng',
    },
    {
      key: 'SE12348',
      name: 'Nguyễn Văn H',
      attendance: 'Vắng',
    },
    {
      key: 'SE12349',
      name: 'Nguyễn Văn I',
      attendance: 'Vắng',
    },
    {
      key: 'SE12350',
      name: 'Nguyễn Văn K',
      attendance: 'Vắng',
    },
  ]);

  const dataResult = [
    { key: '1', content: 'Số học sinh vắng: 2 ' },
    { key: '2', content: 'Học sinh nghỉ quá 20%: 0 ' },
  ];

  return (
    <>
      <Typography.Title level={4}>Lớp OD6101</Typography.Title>
      <Typography.Title level={4}>Slot 4</Typography.Title>
      <div className='attendance-tables'>
        <div className='attendance-table'>
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
      <div className='submit-attendance'>
        <Button>Gửi</Button>
      </div>
    </>
  );
};

export default ClassSchedule;
