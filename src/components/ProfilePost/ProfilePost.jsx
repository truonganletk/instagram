import React, { useContext, useEffect } from 'react'
import { PostContext } from '../../context/postContext/PostContext';
import { getLists } from '../../context/postContext/Services';
import Postpreview from '../Post/Post-preview'
import PropTypes from "prop-types";

function ProfilePost({ ...props }) {
    const { lists, dispatch } = useContext(PostContext);
    const { id } = props;

    useEffect(() => {
        getLists(dispatch);
    }, []);

    return (
        <section className="w-full grid grid-cols-3 gap-5">
            {lists?.filter((post) => post.post_created_by === id).map((post, index) => (
                <Postpreview
                    key={index}
                    post={post}
                />
            ))}
        </section>
    )
}

ProfilePost.propTypes = {
    id: PropTypes.string,
};

export default ProfilePost