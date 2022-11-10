import React from 'react';

const sample = () => {
    if(reviews === {}){
        return (<h2>You currently have no reviews.</h2>)
    }
    return (
        <div>
            { (reviews === {}) ?
                                    <h2>You currently have no reviews.</h2>
                                        :
                                        <table className="table w-full">

                                            <thead>
                                                <tr>
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" className="checkbox" disabled />
                                                        </label>
                                                    </th>
                                                    <th>Service Name</th>
                                                    <th>Review</th>
                                                    <th>Rating</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    reviews.map(review =>
                                                        <MyReviewRow key={review._id}
                                                            review={review}
                                                            handleDelete={handleDelete}
                                                        ></MyReviewRow>)
                                                }
                                            </tbody>

                                        </table>
                                }
        </div>
    );
};

export default sample;