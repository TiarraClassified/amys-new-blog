import React from "react";
import { StoryContext } from "../StoryProvider";

export default function Table(props) {
  return (
    <StoryContext.Consumer>
      {blogs => {
        if (blogs.length > 0) {
          return (
            <table id="story-table">
              <caption>List of Stories</caption>
              <thead id="headers">
                <tr>
                  <th>Select</th>
                  <th>Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => {
                  return (
                    <tr key={blog.id} className="table-row">
                      <td
                        onClick={() => {
                          props.select(index, blog.id);
                        }}
                      >
                        {blog.id}
                      </td>
                      <td>{blog.title}</td>
                      <td>{blog.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        }
      }}
    </StoryContext.Consumer>
  );
}
