import { useState, useEffect } from 'react';
import s from './App.module.css';
import {ImageGallery} from './ImageGallery/ImageGallery';
import {Searchbar} from './Searchbar/Searchbar';
import {Button} from './Button/Button';
import {Modal} from './Modal/Modal';
import {Loader} from './Loader/Loader'
import * as Scroll from 'react-scroll';
import { fetchGalery } from 'utilits/fetchGalery'; // функция не делает сам запрос но хранит все настройки для поиска.
import { ToastContainer, toast } from 'react-toastify'; // попапы
//так как в моем проэкте есть попапы, я не буду созавать отдельные компоненты для рендера в них ошибок, а просто использую ифы.

export const App = () => {
  const [pages, setPages] = useState(1)
  const [searchWord, setSearchWord] = useState("")
  const [arreyImg, setArreyImg] = useState([])
  const [modal, setModal] = useState(null)
  const [error, setError] = useState(null)
  const [buttonIs, setButtonIs] = useState(false)
  const [sceleton, setSceleton] = useState(false)

    //это функция пропс для поискового запроса
    //при новом поисковом слове скинем страницу в первую.
  const newSearchWord = searchWord => {
    setArreyImg([])
    setSearchWord(searchWord);
    setPages(1)
  };

    //это функция пропс для кнопки листания страниц
  const loadMore = () => {
    Scroll.animateScroll.scrollMore(300);
    setPages((pS)=>pS+1)
  };

    // функции отрисовки новых карточек
  const renderNew = arreyImgNew => {
    setArreyImg((pS)=>[...pS,...arreyImgNew])
  };
  // обработчик модального окна
  const  onModalOpen = e => {
    setModal(e.target.dataset.img)
    };

  const onModalClouse = () => {
    setModal(null)
  };

  const findImg = async() => {
    setSceleton(true)//рендерим загрузчик
    try{
      const findImgsJSON = await fetch(
        fetchGalery(searchWord, pages)
      );
      const findImgs = await findImgsJSON.json();
      if (findImgs.totalHits === 0) {
        setButtonIs(false);
        toast.warning(`We cant finde nosing`);
      } else if (findImgs.totalHits > pages * 12) {
        setButtonIs(true);
        toast.success(
          `We finde ${pages * 12} of ${findImgs.totalHits} imeges`
        );
      } else if (findImgs.totalHits < pages * 12) {
        setButtonIs(false);
        toast.warning(`We finde last imges of ${findImgs.totalHits} imeges`);
      }
      renderNew(findImgs.hits)
    }catch(err){
      setError(err)
      console.log(error);
      toast.error(`Happend ${err}`);
    }
    setSceleton(false)//скрываем загрузчик
  }

  useEffect(()=>{
    findImg()
  },[pages])

  return (<div className={s.papers}>
           <Searchbar setSearchWord={newSearchWord} />
           {arreyImg.length > 0 && <ImageGallery
             onModalOpen={onModalOpen}
             arreyImg={arreyImg}
           />}
           {sceleton && <Loader/>}
           {buttonIs && <Button loadMore={loadMore}/>}
           {modal && 
             <Modal
               imgFull={modal}
               onModalClouse={onModalClouse}
             />
           }
           <ToastContainer autoClose={3000}/>
          </div>)
}
