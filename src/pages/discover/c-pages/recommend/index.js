import React, { memo, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

function BeiRecommend(props) {

    const { topBanners } = useSelector(state => ({
        topBanners: state.topBanners
    }))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])
    return (
        <div>
            <h2>BeiRecommend</h2>
        </div>
    )
}

export default (memo(BeiRecommend));


// function BeiRecommend(props) {
//     const { getBanners } = props;

//     useEffect(() => {
//         getBanners();
//     }, [getBanners])

//     return (
//         <div>
//             <h2>BeiRecommend</h2>
//         </div>
//     )
// }

// const mapStateToProps = state => ({
//     topBanners: state.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         // dispatch(getTopBannerAction)
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(BeiRecommend));
