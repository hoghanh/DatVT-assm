import { Button, DatePicker, InputNumber, Table, Typography } from 'antd';
import React, { useState } from 'react';
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
import locale from 'antd/es/date-picker/locale/vi_VN';
import 'dayjs/locale/vi';

const Schedule = () => {
  const columns = [
    {
      title: 'Slot',
      dataIndex: 'slot',
      width: '12.5%',
    },
    {
      title: 'Thứ 2',
      dataIndex: 'mon',
      width: '12.5%',
    },
    {
      title: 'Thứ 3',
      dataIndex: 'tue',
      width: '12.5%',
    },
    {
      title: 'Thứ 4',
      dataIndex: 'wed',
      width: '12.5%',
    },
    {
      title: 'Thứ 5',
      dataIndex: 'thu',
      width: '12.5%',
    },
    {
      title: 'Thứ 6',
      dataIndex: 'fri',
      width: '12.5%',
    },
    {
      title: 'Thứ 7',
      dataIndex: 'sat',
      width: '12.5%',
    },
    {
      title: 'Chủ nhật',
      dataIndex: 'sun',
      width: '12.5%',
    },
  ];

  const data = [];

  for (let i = 0; i < 8; i++) {
    if (i === 3) {
      data.push({
        key: i,
        slot: `Slot ${i + 1}`,
        mon: '----',
        tue: '----',
        wed: (
          <Typography.Link>SWP391 Class OD6101 (1:15 - 3:45)</Typography.Link>
        ),
        thu: '----',
        fri: '----',
        sat: '----',
        sun: '----',
      });
    } else {
      data.push({
        key: i,
        slot: `Slot ${i + 1}`,
        mon: '----',
        tue: '----',
        wed: '----',
        thu: '----',
        fri: '----',
        sat: '----',
        sun: '----',
      });
    }
  }

  const [year, setYear] = useState(2022);

  const incrementYear = () => {
    setYear(year + 1);
  };

  const decrementYear = () => {
    setYear(year - 1);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Typography.Title level={4}>Sinh Viên Trần Văn A</Typography.Title>
      <div className='selector'>
        <div className='year-selector'>
          <div className='year-button'>
            <Button
              icon={<CaretUpFilled />}
              size='small'
              onClick={incrementYear}
            />
            <Button
              icon={<CaretDownFilled />}
              size='small'
              onClick={decrementYear}
            />
          </div>
          <InputNumber
            style={{ width: 130 }}
            min={2010}
            value={year}
            onChange={(value) => setYear(value)}
            addonBefore='Năm'
          />
        </div>
        <div className='week-selector'>
          <DatePicker
            locale={locale}
            onChange={onChange}
            picker='week'
            placeholder='Chọn tuần'
          />
        </div>
      </div>

      <div className='report-attendance-table'>
        <Table
          columns={columns}
          dataSource={data}
          rowKey={(data) => data.key}
          pagination={false}
        />
      </div>
    </>
  );
};

export default Schedule;
