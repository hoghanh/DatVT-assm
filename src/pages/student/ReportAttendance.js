import { Table, Typography } from 'antd';
import React from 'react';

const ReportAttendance = () => {
  const columns = [
    {
      title: 'Ngày',
      dataIndex: 'date',
    },
    {
      title: 'Slot',
      dataIndex: 'slot',
    },
    {
      title: 'Phòng',
      dataIndex: 'room',
    },
    {
      title: 'Giảng viên',
      dataIndex: 'lecture',
    },
    {
      title: 'Tên lớp',
      dataIndex: 'group',
    },
    {
      title: 'Trạng thái điểm danh',
      dataIndex: 'status',
    },
  ];
  const data = [
    {
      key: '1',
      date: 'Thứ tư 10/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '2',
      date: 'Thứ bảy 13/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '3',
      date: 'Thứ tư 17/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '4',
      date: 'Thứ bảy 20/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '5',
      date: 'Thứ tư 24/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '6',
      date: 'Thứ bảy 27/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '7',
      date: 'Thứ tư 31/05/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Vắng',
    },
    {
      key: '8',
      date: 'Thứ bảy 03/06/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '9',
      date: 'Thứ tư 07/06/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Hiện diện',
    },
    {
      key: '10',
      date: 'Thứ bảy 10/06/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Sắp tới',
    },
    {
      key: '11',
      date: 'Thứ tư 14/06/2023	',
      slot: '2_(9:30-11:45)',
      room: 'NVH606',
      lecture: 'TaiNT',
      group: 'NJS1702',
      status: 'Sắp tới',
    },
  ];

  return (
    <>
      <Typography.Title level={4}>Kì học: Summer 2023</Typography.Title>
      <Typography.Title level={4}>Môn học : SWP391</Typography.Title>
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

export default ReportAttendance;
