import React from 'react';
import './style.scss';

export default function Sidebar() {
  const sidebar_components_name  = [
    {title: 'Main', class: 'sidebar_main', row: ['Users', 'Posts', 'Categories'], image: ['3User.png', 'Game.png', 'Categories.png']},
    {title: 'Settings', class: 'sidebar_settings', row: ['Profile', 'Roles', 'Maps'], image: ['Document.png', 'Setting.png', 'Location.png']}
  ];

  /** Main・Settingsなどのコンテンツのリンク先を表示する項目
   * レコードの左側：アイコン
   * レコードの右側：リンク先の名前
   */
  const sidebar_content_inner = (content_row, content_image) => {
    return(
      <div className='sidebar_main_inner'>
        <img src={'./images/' + content_image}  className='users-image' />
        <p>{content_row}</p>
      </div>
    )
  };

  // MainやSettingsなどコンテンツごとに表示する項目
  const sidebar_components = sidebar_components_name.map((sidebar_component_name) =>
    <div className={sidebar_component_name.class}>
      {sidebar_component_name.title}
      {sidebar_component_name.row.map((component_row_name, i) => 
          sidebar_content_inner(component_row_name, sidebar_component_name.image[i])
      )}
    </div>
  );

  /**サイドバーの表示項目
   * ・Dashbord
   * 　・Dashbord
   * ・Main        => {sidebar_components} で画面表示
   * 　・Users
   * 　・Posts
   * 　・Categories
   * ・Settings    => {sidebar_components} で画面表示
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
