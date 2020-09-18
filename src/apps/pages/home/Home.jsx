import React from 'react';
import FlexPost from '../../components/flex-post/FlexPost';
import HomePost from '../../components/home-post/HomePost';
import TitleDecoration from '../../entities/title-decoration/TitleDecoration';

const icon_thi_truong = 'https://cdn.24h.com.vn/images/icon_topck.png';
const imgFlex = 'https://cdn.24h.com.vn/upload/3-2020/images/2020-09-18/thumbnail/1600402518-957-thumbnail-width640height480.jpg';

export default function Home() {
  return (
    <div className='container mt-2'>
      <div className='row'>
        <div className='col-md-4'>
          <HomePost />
          <HomePost />
          <HomePost />
        </div>
        <div className='col-md-4'>
          <HomePost />
          <HomePost />
          <HomePost />
        </div>
        <div className='col-md-4'>
          <TitleDecoration
            img={true}
            imgSrc={icon_thi_truong}
            color='deeppink'
            title='Tin tức thị trường'
          />
          <FlexPost imgSrc={imgFlex} href='/' title="Nếu bạn biết 2/3 địa chỉ mua sách bên dưới, bạn đích thị là “mọt sách” chính hiệu!" />
        </div>
      </div>
    </div>
  );
}
