import React from 'react'

const RatesTable = ({ tableData }) => {
	return (
		<section className="fees-grid">
      
				<div className="fee-block title service-type">
					<p>Service Type</p>
				</div>
				<div className="fee-block title">
					<p>Rate</p>
				</div>
			

      {
				tableData.map(row => (
					<React.Fragment key={row.serviceType}>
						<div className="fee-block service-type">
							<p>{row.serviceType}</p>
						</div>
						<div className="fee-block rate">
							<p dangerouslySetInnerHTML={{__html: row.rate}} />
						</div>
					</React.Fragment>
				))
			}
          
    </section>
	)
}

export default RatesTable
