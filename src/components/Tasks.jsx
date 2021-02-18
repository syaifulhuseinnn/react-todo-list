import Item from './Item';

export default function Todos({ items }) {
	console.log(items)
	return(
		items.map(item => <Item strTask={item.strTask} strDesc={item.strDescription} key={item.id} />)
	)
};
