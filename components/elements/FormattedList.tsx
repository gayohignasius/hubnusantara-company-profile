type FormattedListProps = {
	items: string[];
};

const FormattedList: React.FC<FormattedListProps> = ({ items }) => {
	const formatItem = (item: string) => {
		const firstSentenceEnd = item.indexOf(".") + 1;
		const firstSentence = item.slice(0, firstSentenceEnd);
		const restOfItem = item.slice(firstSentenceEnd).trim();

		return (
			<p>
				<strong>{firstSentence}</strong> {restOfItem}
			</p>
		);
	};

	return (
		<>
			{items.map((item, index) => (
				<div className="pl-11" key={index}>
					<ul className="list-outside list-['-_']">
						<li>{formatItem(item)}</li>
					</ul>
				</div>
			))}
		</>
	);
};

export default FormattedList;
