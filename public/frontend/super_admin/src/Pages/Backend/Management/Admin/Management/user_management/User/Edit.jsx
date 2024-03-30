import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import dataStoreSlice, { async_actions } from './Config/store.js';
import setup from "./Config/setup.js";
import { useParams } from 'react-router-dom';

function Edit() {
  const { id } = useParams();
  setup.dispatch = useDispatch();
  const data_store = useSelector((state) => state[setup.prefix]["singleData"])
  setup.set_async(async_actions, dataStoreSlice);
  const { get_users, set_data, update_data } = setup.actions;

  useEffect(() => {
    get_users(id);

    return () => {
      document.getElementById('form-data')?.reset();
      set_data(null)
    };
  }, []);
  console.log('id from edit', id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let form_data = new FormData(event.target);
    // form_data.append('id', id);
    // form_data.append('role', id);
    console.log('form data', form_data);
    // [...document.querySelectorAll('.form_error')].forEach((el => el.remove()));
    await update_data(form_data);
    // e.target.reset();
    // // e.target.serial.value = "";
    // // e.target.title.value = "";

  };
  console.log('datra store from edit', data_store);
  if (data_store) {
    const { user_name,role, user_uid, email, password, confirm_password, id  } = data_store;
    return (
      <div className="card list_card">
        <div className="card-header ">
          <h2 className="heading">Edit</h2>
          <div className="btns d-flex gap-2 align-items-center">
            <a href="#/dashboard/user" className="btn rounded-pill btn-outline-secondary">
              {/* <i className="material-symbols-outlined fill">arrow_back</i> */}
              Back
            </a>
          </div>
        </div>
        <form onSubmit={(event) =>handleSubmit(event)} id='form-data'>
          <div className="card-body">
            <div className="container py-5">
              <div className="row">
                <div className="col-lg-8">
                  <div className="form-group mb-5">
                    <div className="custom_form_el">
                      <label htmlFor="">Id</label>
                      <div>:</div>
                      <div><input name="id" type="text" className="form-control" defaultValue={id} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">User Uid</label>
                      <div>:</div>
                      <div><input name="user_uid" type="text" className="form-control" defaultValue={user_uid} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Username</label>
                      <div>:</div>
                      <div><input name="user_name" type="text" className="form-control" defaultValue={user_name} /></div>
                    </div>
                    {/* <div className="custom_form_el">
                      <label htmlFor="">Password</label>
                      <div>:</div>
                      <div><input name="password" type="text" className="form-control" defaultValue={password} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Confirm Password</label>
                      <div>:</div>
                      <div><input name="confirm_password" type="text" className="form-control"  defaultValue={confirm_password} /></div>
                    </div> */}
                    <div className="custom_form_el">
                      <label htmlFor="">Email</label>
                      <div>:</div>
                      <div><input name="email" type="text" className="form-control" defaultValue={email} /></div>
                    </div>
                    <div className="custom_form_el">
                      <label htmlFor="">Role</label>
                      <div>:</div>
                      <div>
                      <select defaultValue={role}  name="role" id="">
                        <option value="admin">admin</option>
                        <option value="moderator">moderator</option>
                        <option value="employee">employee</option>
                        <option value="student">student</option>
                      </select>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-outline-info" type="submit" value="Create">
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Edit