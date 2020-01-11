import React from 'react';
import './footer.scss'
type Iprops = Readonly<any>

const Footer:React.FC = (props:Iprops) => {
        return (
            <>
                <div className='footer'>footer</div>
                <div className='bg-footer'></div>
            </>
        )
}
export default Footer