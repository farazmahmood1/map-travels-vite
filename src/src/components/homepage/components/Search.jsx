import React from 'react'

const Search = () => {
    return (
        <div>
            <section className="tour-search">
                <div className="custom-container ">
                    <form action className="tour-search-form">
                        <div className="input-wrapper">
                            <label htmlFor="destination" className="input-label">Search Destination*</label>
                            <input type="text" name="destination" id="destination" required placeholder="Enter Destination" className="input-field" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="people" className="input-label">Pax Number*</label>
                            <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="checkin" className="input-label">Checkin Date**</label>
                            <input type="date" name="checkin" id="checkin" required className="input-field" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="checkout" className="input-label">Checkout Date*</label>
                            <input type="date" name="checkout" id="checkout" required className="input-field" />
                        </div>
                        <button type="submit" className="custom-btn custom-btn-secondary">Inquire now</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Search