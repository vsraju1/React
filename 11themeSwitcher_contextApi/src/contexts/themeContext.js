import { useContext} from 'react';
import ThemeContext from "./theme"

export default function useTheme(){
    return useContext(ThemeContext)
}