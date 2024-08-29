import React, { useState } from 'react';
import { Dropdown, Menu, Button, InputNumber } from 'antd';
import { DownOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const GuestRoomSelector = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [visible, setVisible] = useState(false);

  const handleDone = () => {
    setVisible(false); // Đóng menu khi nhấn "Done"
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>
            <UserOutlined style={{ marginRight: 8 }} />
            Adult
          </span>
          <InputNumber
            min={1}
            value={adults}
            onChange={(value) => setAdults(value || 1)}
            style={{ marginLeft: 10 }}
          />
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span>
            <TeamOutlined style={{ marginRight: 8 }} />
            Children
          </span>
          <InputNumber
            min={0}
            value={children}
            onChange={(value) => setChildren(value || 0)}
            style={{ marginLeft: 10 }}
          />
        </div>
      </Menu.Item>
      <Menu.Item key="3">
        <Button type="primary" onClick={handleDone} style={{ width: '100%' }}>
          Done
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
      visible={visible}
      onVisibleChange={(flag) => setVisible(flag)}
    >
      <Button>
        {`${adults} Adult(s), ${children} Child(ren)`} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default GuestRoomSelector;
