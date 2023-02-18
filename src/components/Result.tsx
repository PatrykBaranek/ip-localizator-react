import { useState } from 'react';
import { IPFY } from '../types/ipfy-types';
import { ResultContainer } from './styles/ResultContainer.styled';

import ArrowSvg from '../assets/icon-arrow.svg';

interface IResultProps {
	data: IPFY;
}

export const Result: React.FC<IResultProps> = ({ data }) => {
	const [show, setShow] = useState<boolean>(true);

	const toggleShow = () => {
		if (show === false) {
			setShow(true);
			return;
		}
		setShow(false);
	};

	if (!show)
		return (
			<ResultContainer onClick={toggleShow} style={{ height: '0' }}>
				{!show && (
					<img
						src={ArrowSvg}
						alt="arrow icon"
						style={{ transform: 'rotate(-90deg)' }}
					/>
				)}
			</ResultContainer>
		);

	return (
		<ResultContainer onClick={toggleShow}>
			{show && (
				<>
					<img
						src={ArrowSvg}
						alt="arrow icon"
						style={{ transform: 'rotate(90deg)' }}
					/>
					<li>
						<h2>IP Address</h2>
						<span>{data.ip}</span>
					</li>
					<li>
						<h2>Location</h2>
						<span>{data.location.region}</span>
					</li>
					<li>
						<h2>Timezone</h2>
						<span>UTC {data.location.timezone}</span>
					</li>
					<li>
						<h2>ISP</h2>
						<span>{data.isp}</span>
					</li>
				</>
			)}
		</ResultContainer>
	);
};
