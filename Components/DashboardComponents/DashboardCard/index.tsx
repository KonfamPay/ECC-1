import React from 'react';
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';

const LandingPageCard : NextPage = () => {
	const cardcontents = [{
		iconpath: '../../../icons/dashboard-icons/my-complaints.svg',
		title: '',
		description: '',
	}];
	return (
		<>
			{cardcontents.map((card) => 
			<div className="h-[710px] w-auto">
				<div className='bg-white rounded-[27.2px]'>
					<Link href=''><img src={card.iconpath} alt="" /></Link>
				</div>
			</div>)}
		</>
	)
}

export default LandingPageCard;