import image1 from '../components/assets/staff-cleaned-v3/1.jpg';
import image2 from '../components/assets/staff-cleaned-v3/2.jpg';
import image3 from '../components/assets/staff-cleaned-v3/3.jpg';
import image4 from '../components/assets/staff-cleaned-v3/4.jpg';
import image5 from '../components/assets/staff-cleaned-v3/5.jpg';
import image6 from '../components/assets/staff-cleaned-v3/6.jpg';
import image7 from '../components/assets/staff-cleaned-v3/7.jpg';
import image9 from '../components/assets/staff-cleaned-v3/9.jpg';
import image10 from '../components/assets/staff-cleaned-v3/10.jpg';
import image11 from '../components/assets/staff-cleaned-v3/11.jpg';
import image12 from '../components/assets/staff-cleaned-v3/12.jpg';
import image13 from '../components/assets/staff-cleaned-v3/xinhong.jpg';
import image15 from '../components/assets/staff-cleaned-v3/15.jpg';
import image16 from '../components/assets/staff-cleaned-v3/16.jpg';
import image17 from '../components/assets/staff-cleaned-v3/17.jpg';
import image19 from '../components/assets/staff-cleaned-v3/19.jpg';
import image20 from '../components/assets/staff-cleaned-v3/20.jpg';
import image21 from '../components/assets/staff-cleaned-v3/21.jpg';
import image23 from '../components/assets/staff-cleaned-v3/23.jpg';
import chenLiyanImage from '../components/assets/staff-cleaned-v3/chenliyan-year4.jpg';
import bianZhuofeiImage from '../components/assets/staff-cleaned-v3/bianzhuofei-year6.jpg';
import tangYushuImage from '../components/assets/staff-cleaned-v3/tangyushu-hsk2.jpg';
import gouSukJiImage from '../components/assets/staff-cleaned-v3/gaoshuyi-cantonese.jpg';
import jyunZingjiImage from '../components/assets/staff-cleaned-v3/ruanjinger-cantonese.jpg';
import wongHaaucingImage from '../components/assets/staff-cleaned-v3/huangqiaoqing-cantonese.jpg';
import wongZihangImage from '../components/assets/staff-cleaned-v3/huangziheng-cantonese.jpg';
import jinYumeiImage from '../components/assets/staff-cleaned-v3/jinyumei-gcse.jpg';

export const teacherSections = [
  {
    key: 'teachers-group-leadership',
    staff: [
      {
        image: image1,
        nameZh: '\u66fe\u6155\u5a49', nameHk: '\u66fe\u6155\u5a49',
        nameEn: 'Lee, Mo Yuen',
        roleKey: 'teacher-role-principal',
      },
      {
        image: image2,
        nameZh: '\u5f20\u56ed\u56ed', nameHk: '\u5f35\u5712\u5712',
        nameEn: 'McCoo Zhang, Yuanyuan',
        roleKey: 'teacher-role-vice-principal',
      },
      {
        image: image13,
        imageStyle: 'circle',
        nameZh: '\u8f9b\u7ea2', nameHk: '\u8f9b\u7d05',
        nameEn: 'Xin, Hong',
        roleKey: 'teacher-role-director-of-studies',
      },
    ],
  },
  {
    key: 'teachers-group-mandarin',
    staff: [
      { image: image6, nameZh: '\u5468\u96c5\u6c81', nameHk: '\u5468\u96c5\u6c81', nameEn: 'Zhou, Yaqin', roleKey: 'teacher-role-yct-1' },
      { image: image12, nameZh: '\u5f20\u8574\u840c', nameHk: '\u5f35\u860a\u840c', nameEn: 'Zhang, Yunmeng', roleKey: 'teacher-role-yct-1' },
      { image: tangYushuImage, imageStyle: 'circle', imageScale: 1.2, nameZh: '\u6c64\u6bd3\u6dd1', nameHk: '\u6e6f\u6bd3\u6dd1', nameEn: 'Tang, Yushu', roleKey: 'teacher-role-hsk-2' },
      { image: image5, nameZh: '\u859b\u4e3d\u541b', nameHk: '\u859b\u9e97\u541b', nameEn: 'Xue, Lijun', roleKey: 'teacher-role-year-1' },
      { image: image4, nameZh: '\u6d82\u536b\u7ea2', nameHk: '\u5857\u885b\u7d05', nameEn: 'Tu, Weihong', roleKey: 'teacher-role-year-2' },
      { image: image3, nameZh: '\u8d75\u5a1c', nameHk: '\u8d99\u5a1c', nameEn: 'Zhao, Na', roleKey: 'teacher-role-year-3' },
      { image: image11, nameZh: '\u9093\u60a6', nameHk: '\u9127\u6085', nameEn: 'Deng, Yue', roleKey: 'teacher-role-year-3' },
      { image: image7, nameZh: '\u6881\u7389\u5f71', nameHk: '\u6881\u7389\u5f71', nameEn: 'Liang, Yuying', roleKey: 'teacher-role-year-4' },
      { image: chenLiyanImage, imageStyle: 'circle', imageScale: 1, nameZh: '\u9648\u7acb\u71d5', nameHk: '\u9673\u7acb\u71d5', nameEn: 'Chen, Liyan', roleKey: 'teacher-role-year-4' },
      { image: image9, nameZh: '\u7ba1\u6653\u5a1c', nameHk: '\u7ba1\u66c9\u5a1c', nameEn: 'Guan, Xiaona', roleKey: 'teacher-role-year-5' },
      { image: image10, nameZh: '\u9ec4\u7389\u5b81', nameHk: '\u9ec3\u7389\u5be7', nameEn: 'Huang, Yuning', roleKey: 'teacher-role-year-5' },
      { image: bianZhuofeiImage, imageStyle: 'circle', imageScale: 1.9, imagePosition: '72% center', nameZh: '\u535e\u5353\u83f2', nameHk: '\u535e\u5353\u83f2', nameEn: 'Bian, Zhuofei', roleKey: 'teacher-role-year-6' },
      { image: image15, nameZh: '\u5f90\u5c0f\u7136', nameHk: '\u5f90\u5c0f\u7136', nameEn: 'Xu, Xiaoran', role: 'GCSE' },
      { image: image16, nameZh: '\u90ed\u5f3a', nameHk: '\u90ed\u5f37', nameEn: 'Guo, Qiang', role: 'GCSE' },
      { image: image23, nameZh: '\u738b\u6052', nameHk: '\u738b\u6046', nameEn: 'Wang, Heng', role: 'GCSE' },
      { image: jinYumeiImage, imageStyle: 'circle', imageScale: 1, imagePosition: 'center 85%', nameZh: '\u91d1\u7389\u6885', nameHk: '\u91d1\u7389\u6885', nameEn: 'Jin, Yumei', role: 'GCSE' },
      { image: image17, nameZh: '\u6c88\u65fb', nameHk: '\u6c88\u65fb', nameEn: 'Shen, Min', role: 'A-level' },
    ],
  },
  {
    key: 'teachers-group-cantonese',
    staff: [
      { image: image19, nameZh: '\u7f57\u7fe0\u83b2', nameHk: '\u7f85\u7fe0\u84ee', nameEn: 'Lo, Choilin', roleKey: 'teacher-role-cantonese' },
      { image: image20, nameZh: '\u5218\u6cf3\u8bd7', nameHk: '\u5289\u6cf3\u8a69', nameEn: 'Lau, Wingsi', roleKey: 'teacher-role-cantonese' },
      { image: image21, nameZh: '\u9648\u79c0\u4e3d', nameHk: '\u9673\u79c0\u9e97', nameEn: 'Chan, Saulai', roleKey: 'teacher-role-cantonese' },
      { image: gouSukJiImage, imageStyle: 'circle', imageScale: 1, imagePosition: 'center top', nameZh: '\u9ad8\u6dd1\u4eea', nameHk: '\u9ad8\u6dd1\u5100', nameEn: 'Gou, SukJi', roleKey: 'teacher-role-cantonese' },
      { image: jyunZingjiImage, imageStyle: 'circle', imageScale: 1.04, imagePosition: 'center 25%', nameZh: '\u962e\u9756\u513f', nameHk: '\u962e\u9756\u5152', nameEn: 'Jyun, Zingji', roleKey: 'teacher-role-cantonese' },
      { image: wongHaaucingImage, imageStyle: 'circle', imageScale: 1, nameZh: '\u9ec4\u5de7\u6674', nameHk: '\u9ec3\u5de7\u6674', nameEn: 'Wong, Haaucing', roleKey: 'teacher-role-cantonese' },
      { image: wongZihangImage, imageStyle: 'circle', imageScale: 1.2, imagePosition: 'center bottom', nameZh: '\u9ec4\u5b5c\u6052', nameHk: '\u9ec3\u5b5c\u6046', nameEn: 'Wong, Zihang', roleKey: 'teacher-role-cantonese' },
    ],
  },
];
