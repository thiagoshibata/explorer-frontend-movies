/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar, FaRegStar } from "react-icons/fa"
import { Container } from "./styles"

import { Tag } from "../../components/Tag"

export function Movie({ data, ...rest }) {
  return (
    <Container>
      <h2>{data.title}</h2>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStar />
      </div>
      <p>{data.description}</p>
      <footer>
        {data.tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </footer>
    </Container>
  )
}
