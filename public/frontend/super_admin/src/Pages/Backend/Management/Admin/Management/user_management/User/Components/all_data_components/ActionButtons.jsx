import React, { useEffect } from 'react'
// import setup from '../../Config/setup';

function ActionButtons() {
    // const data_store = useSelector((state) => state[setup.prefix]);
    // setup.dispatch = useDispatch();
    // const { set_show_active_data, get_data } = setup.actions;

    return (
        <>
            <div className="btns d-flex gap-2 align-items-center">
                <a href={`#/dashboard/user/create`} className="btn rounded-pill btn-outline-secondary">
                    Create
                </a>
                <div className="table_actions">
                    <a href="#" className="btn p-2 btn-outline-secondary">
                        {/* <i className="material-symbols-outlined fill">tune</i> */}
                        <i className="bx bx-cog bx-spin"></i>
                    </a>
                    <ul>
                        <li>
                            <a href="">
                                
                                Export All
                            </a>
                        </li>

                        <li>
                            <a className="">
                                
                                Import
                            </a>
                        </li>
                        {
                           1 == 1 ?
                                <li>
                                    <a href="#/user" title="display data that has been deactivated" className="d-flex">
                                        
                                        Deactive data
                                    </a>
                                </li>
                                :
                                <li>
                                    <a href="#/user" title="display data that has been deactivated" className="d-flex">
                                       
                                        Active data
                                    </a>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ActionButtons