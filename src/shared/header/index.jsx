
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import Sidebar from "../sidebar";
import HeadsetIcon from '../../assets/images/headset-icon.png';
import { useGlobalState } from "../../app/Context";
import { setSidebarOpen, setMobileSearchbarOpen } from "../../app/appSlice";
import { useState } from "react";

function Header(){
    const [state, dispatch] = useGlobalState();
    const [text, setText] = useState('');
    const testCategoryItems = Array(12).fill({name: 'Headset', iconName: HeadsetIcon});

    const toggleSidebar = (isOpen) => {
        dispatch(setSidebarOpen(isOpen));
    }

    const openMobileSearch = (open, clickedFromButton) => {
        if(!open && clickedFromButton)
        {
            //Check if the inputfield has value then do some search operation
            console.log('Clicked from search button');
        }
        dispatch(setMobileSearchbarOpen(open));
    }

    const onInputChange = ({target}) => {
        setText(target.value);
    }

    const onClear = () => {
        setText('');
    }

   return(
    <div>
        <TopHeader 
            text={text}
            isSearchInputOpen={state.isMobileSearchOpen}
            onOpenSearchInput={openMobileSearch} 
            onOpenSidebar={() => toggleSidebar(true)} 
            onInputChange={onInputChange}
            onClear={onClear}
        />
        <BottomHeader categoryItems={testCategoryItems}/> 
        <Sidebar categoryItems={testCategoryItems} isOpen={state.isSidebarOpen} onClose={() => toggleSidebar(false)}/> 
    </div>
   )
}

export default Header;