import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const PostCardContent = ({ postData }) => {
    return (
        <div>
           {
               postData.split(/(#[^\s#]+)/g).map((data,i)=> {
                if (data.match(/(#[^\s#]+)/g)) {
                    return <Link href={`/hashtag/${data.slice(1)}`} key={i}>
                        <a>
                            {data}
                        </a>
                    </Link>
                }
                return data;

               })
           } 
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
}

export default PostCardContent;