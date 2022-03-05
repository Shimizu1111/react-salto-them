import React from 'react';
import './style.scss';

export default function Sidebar() {
  const sidebar_components_name  = [
    {id: 1, title: 'Main', class: 'sidebar_main', row: ['Users', 'Posts', 'Categories'], image: ['Dashbord.png', 'Dashbord.png', 'Dashbord.png']},
    {id: 2, title: 'Settings', class: 'sidebar_settings', row: ['Profile', 'Roles', 'Maps'], image: ['Dashbord.png', 'Dashbord.png', 'Dashbord.png']}
  ];

  /** Main・Settingsなどのコンテンツのリンク先を表示する項目
   * レコードの左側：アイコン
   * レコードの右側：リンク先の名前
   */
  const sidebar_content_inner = (content_row, content_image) => {
    return(
      <>
        <div className='sidebar_main_inner'>
          <img src={'./images/' + content_image}  className='users-image' />
          <p>{content_row}</p>
        </div>
      </>
    )
  };


  // 
  const sidebar_components = sidebar_components_name.map((sidebar_component_name) =>
    <React.Fragment key={sidebar_component_name.id}>
      <div className={sidebar_component_name.class}>
        {sidebar_component_name.title}
        {sidebar_component_name.row.map((component_row_name, i) => 
           sidebar_content_inner(component_row_name, sidebar_component_name.image[i])
        )}
      </div>
    </React.Fragment>
  );

  /**表示項目
   * ・Dashbord
   * 　・Dashbord
   * ・Main
   * 　・Users
   * 　・Posts
   * 　・Categories
   * ・Settings
   * 　・Profile
   * 　・Roles
   * 　・Maps
   */
  return (
    <div className='side-bar'>
      <div className='dashbord'>
        <img src='./images/Dashbord.png' className='dashbord-image' />
        <p>Dashbord</p>
      </div>
      {sidebar_components}
    </div>
  );
}
