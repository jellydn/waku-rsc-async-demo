export function Header({ site }: { site: string }) {
	return (
		<header className="px-4 bg-gray-100">
			<div className="container flex justify-between items-center py-4 mx-auto">
				<a href="/" className="text-2xl font-bold text-gray-800">
					{site}
				</a>
			</div>
		</header>
	);
}
