import React from 'react';
import {useInput} from "@/hooks/useInput";

const FormCreatePost = () => {
    const title = useInput('');
    const description = useInput('');

    function createPost() {

    }


    return (
        <div className="col-md-6 wrapper">
            <form action="" className="row g-4">
                <div className="col-12">
                    <label>Title<span className="text-danger">*</span></label>
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Enter title"
                               {...title}
                        />
                    </div>
                </div>

                <div className="col-12">
                    <label>Description<span className="text-danger">*</span></label>
                    <div className="input-group">

                        <textarea
                            rows={10}
                            className="form-control"
                            placeholder="Enter description"
                            {...description}
                        ></textarea>
                    </div>
                </div>
                <div className="col-12 mb-4">
                    <button type="submit"
                            className="btn btn-dark px-4 float-end"
                            onClick={(e) => createPost()}>Create post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormCreatePost;