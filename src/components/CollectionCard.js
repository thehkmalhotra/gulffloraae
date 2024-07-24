import Link from 'next/link'
import React from 'react'

const CollectionCard = (props) => {
    return (
        <>
            <Link href={props.slug} legacyBehavior>
                <a>
                    <div className="collection">
                        <img src={props.image_url} alt={props.name} />
                        <h4>{props.name}</h4>
                    </div>
                </a>
            </Link>

            <style jsx>{`
                .collection {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                  }
                  
                  .collection img {
                    width: 100%;
                    border: solid 4px #ffffff;
                  }
                  
                  .collection h4 {
                    font-weight: 500;
                    color: #313131;
                  }
            `}</style>
        </>
    )
}

export default CollectionCard