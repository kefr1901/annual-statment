define = () => ({
	options: {
		format: "pdf",
	},

	template: async ({ page, variables, features }) => `
		<html>
			<head>
				<style>
					@page { margin: 1 1 1 1; }

					@font-face { font-family: "Open Sans Regular"; src: url("https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXRfYXNzZXQiOnsib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiJlYmNkZThmNC1lYjM0LTRlOWEtOTA0ZC1kYjQ5MDI2MDYxOTgifSwicHJvamVjdHMiOlsiZGF0YSJdfSwiZG93bmxvYWRfYXNzZXQiOnsiaW52b2tlIjoiQ29yZS5GaWxlLkRvd25sb2FkIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0X2Fzc2V0LmRhdGEuX2lkIn0sInR5cGUiOnsiJHJlZiI6ImdldF9hc3NldC5kYXRhLnR5cGUifSwiYmluYXJ5IjpmYWxzZX19fQ==&binfrom=download_asset") format("truetype"); }
					@font-face { font-family: "Open Sans Light"; src: url("https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXRfYXNzZXQiOnsib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIxYTQ3MDU0ZS1jMjdhLTRjMTQtODA4My00MGI1OGNhMGNkYjQifSwicHJvamVjdHMiOlsiZGF0YSJdfSwiZG93bmxvYWRfYXNzZXQiOnsiaW52b2tlIjoiQ29yZS5GaWxlLkRvd25sb2FkIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0X2Fzc2V0LmRhdGEuX2lkIn0sInR5cGUiOnsiJHJlZiI6ImdldF9hc3NldC5kYXRhLnR5cGUifSwiYmluYXJ5IjpmYWxzZX19fQ==&binfrom=download_asset") format("truetype"); }
					@font-face { font-family: "Open Sans SemiBold"; src: url("https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXRfYXNzZXQiOnsib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiI2ZDViZGRlNi03N2U3LTQxYzgtYWYyMS1kOWZiODQ0MmNlZmYifSwicHJvamVjdHMiOlsiZGF0YSJdfSwiZG93bmxvYWRfYXNzZXQiOnsiaW52b2tlIjoiQ29yZS5GaWxlLkRvd25sb2FkIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0X2Fzc2V0LmRhdGEuX2lkIn0sInR5cGUiOnsiJHJlZiI6ImdldF9hc3NldC5kYXRhLnR5cGUifSwiYmluYXJ5IjpmYWxzZX19fQ==&binfrom=download_asset") format("truetype"); }

					:root {
						--spacing: 20mm;
						--gapping: 6mm;
						--rounding: 0.9mm;

						--font-size-normal: 9pt;
						--font-size-small: 8pt;

						--contrast: 41, 21%, 85%;
					}

					html, body { margin: 0; padding: 0; }
					body { width: 210mm; height: 297mm; }
					body, table { font-size: var(--font-size-normal); font-family: "Open Sans Regular"; }
					body { background-color: hsl(0, 100%, 100%); }

					article { display: flex; flex-direction: column; gap: var(--gapping); padding: var(--spacing); position: relative; width: 100%; height: 100%; box-sizing: border-box; overflow: clip; }
					article > [block] { display: block; position: relative; width: 100%; box-sizing: border-box; }
					article > [block][space] { padding: var(--gapping); }
					article > [block][hero] { height: 50%; background: fixed center center / cover no-repeat; }
					article > [block][shade] { background-color: hsl(var(--contrast)); border-radius: var(--rounding); }
					article > [block][outline] { border: 1mm solid hsl(var(--contrast)); border-radius: var(--rounding); }
					article [block][totals] { display: flex; flex-direction: row; gap: var(--gapping); }
					article [block][totals] > div { flex: 1 1 auto; background-color: hsl(var(--contrast)); border-radius: var(--rounding); padding: var(--gapping); text-align: center; }
					article [block][totals] > div > div:first-child { font-size: 150%; }

					h1 { margin-top: 0; font-size: 26pt; font-family: "Open Sans SemiBold"; margin-bottom: var(--gapping); }
					h2 { margin-top: 0; font-size: 23pt; font-family: "Open Sans SemiBold"; margin-bottom: var(--gapping); }
					h3 { margin-top: 0; font-size: 19pt; font-family: "Open Sans SemiBold"; margin-bottom: var(--gapping); }
					h4 { margin-top: 0; font-size: 15pt; font-family: "Open Sans SemiBold"; margin-bottom: var(--gapping); }

					h1[gapless],
					h2[gapless],
					h3[gapless],
					h4[gapless] { margin-bottom: 0; }

					table { border-collapse: collapse; }
					table th,
					table td { padding: 0; }

					table[standard] { width: 100%; white-space: nowrap; }
					table[standard] th,
					table[standard] td { padding: 3px 4px 3px 6px; vertical-align: top; }
					table[standard] td:first-child { border-radius: var(--rounding) 0 0 var(--rounding); }
					table[standard] td:last-child { border-radius: 0 var(--rounding) var(--rounding) 0; }
					table[standard] tbody tr:nth-child(even) td { background-color: hsl(var(--contrast)); }
					table[standard] thead { border-bottom: 0.8mm solid hsl(0, 0%, 0%); font-weight: bold; }
					/*table[standard] tbody tr:not(:last-child) { border-bottom: 0.5mm solid hsla(0, 0%, 0%, 0.25); }*/
					table[standard] tfoot { font-weight: bold; border-top: 0.5mm solid hsl(0, 0%, 0%); }

					[align-left] { text-align: left; }
					[align-center] { text-align: center; }
					[align-right] { text-align: right; }
					[align-justify] { text-align: justify; }
					[bold] { font-weight: bold; }
					[italic] { font-style: italic; }
					[hidden] { display: none; }
					[none] { font-weight: bold; }
					[meta] { opacity: 0.3; }
					[margin-top] {margin-top: 20px}

					[footer] { position: absolute; right: 0; bottom: 0; left: 0; height: 40mm; }
					[footer] [logotype] { position: absolute; bottom: 10mm; left: 10mm; width: 10mm; }
					[footer] [page-nr] { position: absolute; bottom: 10mm; left: 50%; transform: translateX(-50%); font-size: 70%; font-weight: bold; }
					[footer] [address] { position: absolute; right: 10mm; bottom: 10mm; width: 40mm; border-left: 1px solid rgb(222, 184, 135); padding-left: 2mm; font-size: 70%; }

					/* Cover */
					article[area="cover"] { border-left: 2mm solid hsla(28, 42%, 60%, 1.0); }
					article[area="cover"] > div { position: absolute; left: 50%; top: 50%; transform: translateX(-50%); white-space: nowrap; text-align: center; }
					article[area="cover"] > div > div { font-size: 130%; }
					article[area="cover"] > img[emblem] { position: absolute; bottom: 14.75mm; left: 50%; transform: translateX(-50%); width: 40%; filter: invert(1); }
					article[area="cover"] > img[watermark] { position: absolute; left: -30%; bottom: -5%; width: 220mm; height: auto; opacity: 0.035; filter: invert(1); }

					/* Summary */
					article[area="summary"] > div:first-child { display: flex; flex-direction: row; gap: var(--gapping); }
					article[area="summary"] > div:first-child > * { flex: 1 1 auto; }

					/* Transactions */
					article[area="transactions"] h4 { margin-bottom: 0; }
					article[area="transactions"] table { font-size: 85%; }
					article[area="transactions"] [none] { margin-top: var(--gapping); }

					/* Basis */
					article[area="basis"] > div { position: absolute; left: 50%; top: 50%; transform: translateX(-50%); white-space: nowrap; text-align: center; }

					/* Cover, Basis */
					article[area="cover"] > img[watermark],
					article[area="basis"] > img[watermark]{ position: absolute; left: -30%; bottom: -5%; width: 220mm; height: auto; opacity: 0.035; filter: invert(1); }

					/* KU30, KU32, KU40, KU41 */
					article[area="ku20"] > div:first-child > div,
					article[area="ku21"] > div:first-child > div,
					article[area="ku25"] > div:first-child > div,
					article[area="ku30"] > div:first-child > div,
					article[area="ku31"] > div:first-child > div,
					article[area="ku32"] > div:first-child > div,
					article[area="ku40"] > div:first-child > div,
					article[area="ku41"] > div:first-child > div { margin-bottom: var(--gapping); }
				</style>
			</head>

			<body>
				<article area="cover">
					<div>
						<h2></h2>
						<div><span portfolio-number bold></span> | <span portfolio-name bold></span></div>
					</div>

					<img watermark src="http://localhost/assets/watermark.svg" />
					<img emblem src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIzNjU5N2Q3Mi01YTQ5LTQyMDctYTQ0NS05ZWYyMzExOTJhYTgifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
				</article>

				<article area="summary">
					<div block outline space>
						<table>
							<tr>
								<td bold>${features.Localize.string("local/summary/portfolio/period")}</td>
								<td align-right portfolio-period></td>
							</tr>

							<tr>
								<td bold>${features.Localize.string("local/summary/portfolio/number")}</td>
								<td align-right portfolio-number></td>
							</tr>

							<tr>
								<td bold>${features.Localize.string("local/summary/portfolio/name")}</td>
								<td align-right portfolio-name></td>
							</tr>

							<tr>
								<td bold>${features.Localize.string("local/summary/portfolio/currency")}</td>
								<td align-right portfolio-currency></td>
							</tr>
						</table>

						<div>
							<div id="name" bold></div>
							<div id="ssnr"></div>
							<div id="address"></div>
							<div id="city"></div>
						</div>
					</div>

					<div block accounts>
						<h3>${features.Localize.string("local/summary/accounts/title")}</h3>

						<div none hidden>
							${features.Localize.string("local/summary/accounts/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/summary/accounts/list/head/name")}</th>
									<th align-right>${features.Localize.string("local/summary/accounts/list/head/balance")}</th>
									<th align-right>${features.Localize.string("local/summary/accounts/list/head/price")}</th>
									<th align-right>${features.Localize.string("local/summary/accounts/list/head/value")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>

							<tfoot>
								<td align-left>${features.Localize.string("local/summary/accounts/list/foot/name")}</td>
								<td align-left></td>
								<td align-left></td>
								<td align-right></td>
							</tfoot>
						</table>
					</div>

					<div block>
						<h3>${features.Localize.string("local/summary/totals/title")}</h3>

						<table standard>
							<thead>
								<tr>
									<th align-left></th>
									<th align-right id="incoming-head"></th>
									<th align-right id="outgoing-head"></th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td align-left>${features.Localize.string("local/summary/totals/metrics/account-balance")}</td>
									<td align-right id="incoming-account-balance"></td>
									<td align-right id="outgoing-account-balance"></td>
								</tr>

								<tr>
									<td align-left>${features.Localize.string("local/summary/totals/metrics/market-value")}</td>
									<td align-right id="incoming-market-value"></td>
									<td align-right id="outgoing-market-value"></td>
								</tr>
							</tbody>

							<tfoot>
								<tr>
									<td align-left>${features.Localize.string("local/summary/totals/metrics/portfolio-value")}</td>
									<td align-right id="incoming-portfolio-value"></td>
									<td align-right id="outgoing-portfolio-value"></td>
								</tr>
							</tfoot>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
                </article>

				<article area="holdings">
					<div block>
						<h2 gapless>${features.Localize.string("local/holdings/title")}</h2>
						<h4 meta date></h4>

						<div none hidden>
							${features.Localize.string("local/holdings/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/holdings/list/head/name")}</th>
									<th align-right>${features.Localize.string("local/holdings/list/head/amount")}</th>
									<th align-right>${features.Localize.string("local/holdings/list/head/price")}</th>
									<th align-right>${features.Localize.string("local/holdings/list/head/currency")}</th>
									<th align-right>${features.Localize.string("local/holdings/list/head/currency-rate")}</th>
									<th align-right>${features.Localize.string("local/holdings/list/head/market-value")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>

							<tfoot hidden>
								<td align-left>${features.Localize.string("local/holdings/list/foot/name")}</td>
								<td align-right></td>
								<td align-right></td>
								<td align-right></td>
								<td align-right></td>
								<td align-right sum></td>
							</tfoot>
						</table>
					</div>

					<div block>
						${features.Localize.string("local/holdings/note")}
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="interests">
					<div block accounts>
						<h2>${features.Localize.string("local/interests/accounts/title")}</h2>

						<div none hidden>
							${features.Localize.string("local/interests/accounts/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/interests/accounts/list/head/account")}</th>
									<th align-right>${features.Localize.string("local/interests/accounts/list/head/credited")}</th>
									<th align-right>${features.Localize.string("local/interests/accounts/list/head/debited")}</th>
									<th align-right>${features.Localize.string("local/interests/accounts/list/head/premtax")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div block bonds>
						<h2>${features.Localize.string("local/interests/bonds/title")}</h2>

						<div block totals>
							<div><div></div><div>${features.Localize.string("local/interests/bonds/totals/grossPriceInEffective/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/interests/bonds/totals/premtax/label")}</div></div>
						</div>

						<div none hidden margin-top>
							${features.Localize.string("local/interests/bonds/none")}
						</div>

						<table standard margin-top>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/interests/bonds/list/head/security")}</th>
									<th align-right>${features.Localize.string("local/interests/bonds/list/head/amount")}</th>
									<th align-right>${features.Localize.string("local/interests/bonds/list/head/premtax")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="dividends">
					<div block>
						<h2>${features.Localize.string("local/dividends/title")}</h2>
					</div>
					
						<div block totals>
							<div><div></div><div>${features.Localize.string("local/dividends/totals/dividents/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/dividends/totals/premtax/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/dividends/totals/foreigntax/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/dividends/totals/coupontax/label")}</div></div>
						</div>

						<div none hidden>
							${features.Localize.string("local/dividends/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/dividends/list/head/name")}</th>
									<th align-right>${features.Localize.string("local/dividends/list/head/amount")}</th>
									<th align-right>${features.Localize.string("local/dividends/list/head/premtax")}</th>
									<th align-right>${features.Localize.string("local/dividends/list/head/foreigntax")}</th>
									<th align-right>${features.Localize.string("local/dividends/list/head/coupontax")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="transactions">
					<div block>
						<h2>${features.Localize.string("local/transactions/title")}</h2>
						<h4></h4>
					</div>

					<div block totals>
						<div incoming><div value></div><div>${features.Localize.string("local/transactions/totals/incoming/label")}</div></div>
						<div outgoing><div value></div><div>${features.Localize.string("local/transactions/totals/outgoing/label")}</div></div>
					</div>

					<div block>
						<table standard>
							<thead>
								<tr>
									<td align-left>
										${features.Localize.string("local/transactions/list/head/business-date")}<br />
										${features.Localize.string("local/transactions/list/head/settlement-date")}
									</td>

									<td align-left>
										${features.Localize.string("local/transactions/list/head/type")}<br />
										${features.Localize.string("local/transactions/list/head/security")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/amount")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/price")}<br />
										${features.Localize.string("local/transactions/list/head/fx")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/taxes-sum")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/taxes-type")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/costs")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/value")}<br />
										${features.Localize.string("local/transactions/list/head/currency-code")}
									</td>

									<td align-right>
										${features.Localize.string("local/transactions/list/head/account-balance")}
										<div incoming-account-balance></div>
									</td>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>

						<div none hidden>
							${features.Localize.string("local/transactions/none")}
						</div>
					</div>

					<div block>
						${features.Localize.string("local/transactions/notice")}
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="basis">
					<div>
						<h2>${features.Localize.string("local/basis/title")}</h2>
					</div>

					<img watermark src="http://localhost/assets/watermark.svg" />
				</article>

				<article area="ku20">
					<div block accounts>
						<h2>${features.Localize.string("local/ku20/accounts/title")}</h2>
						<div meta>${features.Localize.string("local/ku20/accounts/subtitle")}</div>
						<div>${features.Localize.string("local/ku20/accounts/description")}</div>

						<div none hidden>
							${features.Localize.string("local/ku20/accounts/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku20/accounts/list/head/account")}</th>
									<th align-right>${features.Localize.string("local/ku20/accounts/list/head/gross")}</th>
									<th align-right>${features.Localize.string("local/ku20/accounts/list/head/premtax")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="ku21">
					<div block bonds>
						<h2>${features.Localize.string("local/ku21/bonds/title")}</h2>
						<div meta>${features.Localize.string("local/ku21/bonds/subtitle")}</div>

						<div>${features.Localize.string("local/ku21/bonds/description")}</div>
						<h3>${features.Localize.string("local/ku21/bonds/subheading")}</h3>

						<div block totals>
							<div><div></div><div>${features.Localize.string("local/ku21/bonds/totals/grossPriceInEffective/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/ku21/bonds/totals/premtax/label")}</div></div>
						</div>

						<div none hidden>
							${features.Localize.string("local/ku21/bonds/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku21/bonds/list/head/security")}</th>
									<th align-right>${features.Localize.string("local/ku21/bonds/list/head/amount")}</th>
									<th align-right>${features.Localize.string("local/ku21/bonds/list/head/premtax")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>
					<div block sales interests>
						<h3>${features.Localize.string("local/ku21/interests/subheading")}</h3>

						<div block totals>
							<div><div></div><div>${features.Localize.string("local/ku21/interests/totals/accruedInterest/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/ku21/interests/totals/accruedInterestLength/label")}</div></div>
						</div>

						<div none hidden margin-top>
							${features.Localize.string("local/ku21/interests/none")}
						</div>

						<table standard margin-top>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku21/interests/list/head/security")}</th>
									<th align-right>${features.Localize.string("local/ku21/interests/list/head/date")}</th>
									<th align-right>${features.Localize.string("local/ku21/interests/list/head/interest")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>
				<article area="ku25">
					<div block accounts>
						<h2>${features.Localize.string("local/ku25/accounts/title")}</h2>
						<div meta>${features.Localize.string("local/ku25/accounts/subtitle")}</div>
						<div>${features.Localize.string("local/ku25/accounts/description")}</div>

						<div none hidden>
							${features.Localize.string("local/ku25/accounts/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku25/accounts/list/head/account")}</th>
									<th align-right>${features.Localize.string("local/ku25/accounts/list/head/gross")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>
					<div block sales interests>
						<h3>${features.Localize.string("local/ku25/interests/subheading")}</h3>

						<div block totals>
							<div><div></div><div>${features.Localize.string("local/ku25/interests/totals/accruedInterest/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/ku25/interests/totals/accruedInterestLength/label")}</div></div>
						</div>

						<div none hidden margin-top>
							${features.Localize.string("local/ku25/interests/none")}
						</div>

						<table standard margin-top>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku25/interests/list/head/security")}</th>
									<th align-right>${features.Localize.string("local/ku25/interests/list/head/date")}</th>
									<th align-right>${features.Localize.string("local/ku25/interests/list/head/interest")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="ku30">
					<div block>
						<h2>${features.Localize.string("local/ku30/title")}</h2>
						<div meta>${features.Localize.string("local/ku30/subtitle")}</div>
						${features.Localize.string("local/ku30/description")}
					</div>

					<div block>
						<h3>${features.Localize.string("local/ku30/quarters/title")}</h3>

						<table standard quarters>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku30/quarters/head/quarter")}</th>
									<th align-right>${features.Localize.string("local/ku30/quarters/head/initial-balance")}</th>
								</tr>
							</thead>

							<tbody>
								<tr><td align-left>1</td><td align-right></td></tr>
								<tr><td align-left>2</td><td align-right></td></tr>
								<tr><td align-left>3</td><td align-right></td></tr>
								<tr><td align-left>4</td><td align-right></td></tr>
							</tbody>

							<tfoot>
								<tr>
									<td align-left>${features.Localize.string("local/ku30/quarters/foot/quarter")}</td>
									<td align-right sum></td>
								</tr>
							</tfoot>
						</table>
					</div>

					<div block>
						<h3>${features.Localize.string("local/ku30/summary/title")}</h3>

						<table standard summary>
							<tbody>
								<tr><td align-left bold>${features.Localize.string("local/ku30/summary/body/deposit/label")}</td><td align-right></td></tr>
								<tr><td align-left bold>${features.Localize.string("local/ku30/summary/body/capital-base/label")}</td><td align-right></td></tr>
								<tr><td align-left bold>${features.Localize.string("local/ku30/summary/body/imputed-income/label")}</td><td align-right></td></tr>
								<tr><td align-left bold>${features.Localize.string("local/ku30/summary/body/foreign-tax-sum/label")}</td><td align-right></td></tr>
							</tbody>
						</table>
					</div>

					<div block>
						${features.Localize.string("local/ku30/summary/note")}
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>
				
				<article area="ku31">
					<div block>
						<h2>${features.Localize.string("local/ku31/title")}</h2>
						<div meta>${features.Localize.string("local/ku31/subtitle")}</div>
						${features.Localize.string("local/ku31/description")}
					</div>
						<div block totals>
							<div><div></div><div>${features.Localize.string("local/ku31/totals/dividents/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/ku31/totals/premtax/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/ku31/totals/foreigntax/label")}</div></div>
							<div><div></div><div>${features.Localize.string("local/ku31/totals/coupontax/label")}</div></div>
						</div>

						<div none hidden>
							${features.Localize.string("local/ku31/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku31/list/head/name")}</th>
									<th align-right>${features.Localize.string("local/ku31/list/head/date")}</th>
									<th align-right>${features.Localize.string("local/ku31/list/head/amount")}</th>
									<th align-right>${features.Localize.string("local/ku31/list/head/premtax")}</th>
									<th align-right>${features.Localize.string("local/ku31/list/head/foreigntax")}</th>
									<th align-right>${features.Localize.string("local/ku31/list/head/coupontax")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
							<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="ku32">
					<div block>
						<h2>${features.Localize.string("local/ku32/title")}</h2>
						<div meta>${features.Localize.string("local/ku32/subtitle")}</div>
						${features.Localize.string("local/ku32/description")}
					</div>

					<div block totals>
						<div><div></div><div>${features.Localize.string("local/ku32/totals/profits/label")}</div></div>
						<div><div></div><div>${features.Localize.string("local/ku32/totals/losses/label")}</div></div>
						<div><div></div><div>${features.Localize.string("local/ku32/totals/delta/label")}</div></div>
					</div>

					<div block sales>
						<div none hidden>
							${features.Localize.string("local/ku32/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku32/sales/head/security")}</th>
									<th align-right>${features.Localize.string("local/ku32/sales/head/divestment")}</th>
									<th align-right>${features.Localize.string("local/ku32/sales/head/amount")}</th>
									<th align-right>${features.Localize.string("local/ku32/sales/head/sale-amount")}</th>
									<th align-right>${features.Localize.string("local/ku32/sales/head/acquisition-value")}</th>
									<th align-right>${features.Localize.string("local/ku32/sales/head/profit-loss")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>

				<article area="ku40">
					<div block>
						<h2>${features.Localize.string("local/ku40/title")}</h2>
						<div meta>${features.Localize.string("local/ku40/subtitle")}</div>
						${features.Localize.string("local/ku40/description")}
					</div>

					<div block totals>
						<div><div></div><div>${features.Localize.string("local/ku40/totals/profits/label")}</div></div>
						<div><div></div><div>${features.Localize.string("local/ku40/totals/losses/label")}</div></div>
						<div><div></div><div>${features.Localize.string("local/ku40/totals/delta/label")}</div></div>
					</div>

					<div block sales>
						<div none hidden>
							${features.Localize.string("local/ku40/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku40/sales/head/security")}</th>
									<th align-right>${features.Localize.string("local/ku40/sales/head/divestment")}</th>
									<th align-right>${features.Localize.string("local/ku40/sales/head/profit-loss")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
                </article>

				<article area="ku41">
                    <div block>
						<h2>${features.Localize.string("local/ku41/title")}</h2>
						<div meta>${features.Localize.string("local/ku41/subtitle")}</div>
						${features.Localize.string("local/ku41/description")}
					</div>

					<div block>
						<div none hidden>
							${features.Localize.string("local/ku41/none")}
						</div>

						<table standard>
							<thead>
								<tr>
									<th align-left>${features.Localize.string("local/ku41/sales/head/security")}</th>
									<th align-right>${features.Localize.string("local/ku41/sales/head/capital-base")}</th>
									<th align-right>${features.Localize.string("local/ku41/sales/head/template")}</th>
								</tr>
							</thead>

							<tbody>
							</tbody>

							<tfoot>
								<tr>
									<td align-left>${features.Localize.string("local/ku41/sales/foot/security")}</td>
									<td align-right></td>
									<td align-right></td>
								</tr>
							</tfoot>
						</table>
					</div>

					<div footer>
						<img logotype src="https://infinity.transit.api.wictor.one/query?body=base64-eyJnZXQiOnsidmVyc2lvbiI6Mywib2J0YWluIjoiUmVwb3J0aW5nLkFzc2V0IiwiZmluZCI6eyJfaWQiOiIyYjA3OGIxOC1lZjc3LTQ3ODgtOGJjOS1jYWQ2ZDE5OWYyY2IifSwicHJvamVjdHMiOiJkYXRhIn0sImRvd25sb2FkIjp7InZlcnNpb24iOjMsImludm9rZSI6IkNvcmUuRmlsZS5Eb3dubG9hZCIsIm91dHB1dHMiOiJkYXRhIiwiaW5wdXRzIjp7Il9pZCI6eyIkcmVmIjoiZ2V0Ll9pZCJ9LCJ0eXBlIjp7IiRyZWYiOiJnZXQudHlwZSJ9LCJiaW5hcnkiOmZhbHNlfX19&binfrom=download" />
						<div page-nr></div>
						<div address>${features.Localize.string("local/footer/address")}</div>
					</div>
				</article>
			</body>
		</html>
    `,
})

create = async ({ page, variables, features }) => {
	const { Query, DateTimeEx, Localize, RenderMarkdown } = features;

	Array.prototype.toSorted = function (comparison) {
		return this.slice().sort(comparison);
	};

	Array.prototype.toGrouped = function ({ group, sums }) {
		const result = [];
		this.forEach(function (entry) {
			if (!this[entry[group]]) {
				this[entry[group]] = { [group]: entry[group] };
				sums.forEach(field => this[entry[group]][field] = 0);
				result.push(this[entry[group]]);
			}

			sums.forEach(field => this[entry[group]][field] += entry[field]);
		}, Object.create(null));

		return result;
	};

	// const period = {
	// 	start: DateTimeEx.fromParse("2023-01-01"),
	// 	end: DateTimeEx.fromParse("2023-12-31"),
	// };

	//const portfolio = variables.portfolioId;

	// FOR TEST USE
	const period = {
		start: DateTimeEx.fromParse("2024-01-01"),
		end: DateTimeEx.fromParse("2024-12-31"),
	};
	//const portfolio = variables.portfolioId;
	const portfolio = 4406;
	// const userId = "67d8582f-eefa-49fd-ad78-650eb8fc04f8"

	const { data } = await Query.send({
		instruction: {
			"contact": {
				"obtain": "Relations.Contacts",
				//"find": {"_id": variables._id },
				"find": { "_id": "966d2c28-71e1-4e04-bc79-55ddbf8c9224" },
				"projects": ["_id", "fname", "mname", "lname", "reach", "identities", "juridical", "addresses", "extras"],
			},
			"securities": {
				"obtain": "Wealth.Securities",
				"projects": ["_id", "code", "name"],
			},
			"currencies": {
				"obtain": "Core.Localization.Currencies",
				"projects": ["_id", "identifier"],
			},
			"state": {
				"version": 3,
				"invoke": "Wealth.FaPlatform.Portfolios.AnnualStatement.PortfolioState",
				"inputs": {
					faid: portfolio,
					incomingDate: period.start.toMilliseconds(),
					outgoingDate: period.end.toMilliseconds(),
				},
			},
			"transactions": {
				"version": 3,
				"invoke": "Wealth.FaPlatform.Portfolios.AnnualStatement.PortfolioTransactions",
				"inputs": {
					faid: portfolio,
					start: period.start.toMilliseconds(),
					end: period.end.toMilliseconds(),
				},
			},
		}
	});
	const { securities } = data;

	const transactions = data?.transactions?.outputs.data;

	const state = data?.state?.outputs?.data;



	// Recreate contact 
	const contactAsArray = (data?.["contact"] ?? []).map(({ _id, fname, mname, lname, addresses, reach, identities, extras }) => ({
		_id: _id,
		name: fname + " " + mname + " " + lname,
		phone: (reach.find(entry => entry.key === "landline") || {}).value || "",
		email: (reach.find(entry => entry.key === "email") || {}).value || "",
		address: {
			addressLine: (addresses[0].parts.find(entry => entry.key === "line-one") || {}).value || "",
			postalCode: (addresses[0].parts.find(entry => entry.key === "zip") || {}).value || "",
			city: (addresses[0].parts.find(entry => entry.key === "city") || {}).value || "",
			country: (addresses[0].parts.find(entry => entry.key === "country") || {}).value || "",
		},
		ssnr: (identities.find(entry => entry.key === "ssnr") || {}).value || "",
		juridical: (extras.find(entry => entry.key === "juridical") || {}).value || "",
	}));

	// Array to object
	const contact = Object.assign({}, contactAsArray[0]);

	const articleVisibility = [{
		label: "wfo fysiker obegränsat skattskyldig",
		rulesets: [{
			codes: ["hvk", "nkd"],
			tags: [],
			contact: {
				"juridical": "private person",
				"countries": ["se"]
			},
			articles: ["ku20", "ku21", "ku25", "ku31", "ku32", "ku40", "ku41"],
		}, {
			codes: "isk",
			tags: [],
			contact: {},
			articles: ["ku30"],
		}],
	}, {
		label: "wfo fysiker begränsat skattskyldig",
		rulesets: [{
			codes: ["hvk", "nkd"],
			tags: [],
			contact: {
				"juridical": "private person",
				"!countries": ["se"]
			},
			articles: ["ku20", "ku21", "ku25", "ku31", "ku32", "ku40", "ku41"],
		}],
	}, {
		label: "wfo juridiker obegränsat skattskyldig",
		rulesets: [{
			codes: ["hvk", "nkd"],
			tags: [],
			contact: {
				"juridical": "company",
				"countries": ["se"]
			},
			articles: [],
		}],
	}, {
		label: "wfo juridiker begränsat skattskyldig",
		rulesets: [{
			codes: ["hvk", "nkd"],
			tags: [],
			contact: {
				"juridical": "company",
				"!countries": ["se"]
			},
			articles: [],
		}],
	}];

	articleVisibility.determineVisibility = article => {
		for (const visibility of articleVisibility) {
			const matched = visibility.rulesets.find(ruleset =>
				(ruleset.codes.includes(state.type.toLowerCase())) &&
				(ruleset.tags.every(tag => (state.tags ?? []).includes(tag))) &&
				(ruleset?.contact?.["countries"] != null ? ruleset?.contact?.["countries"]?.includes(contact?.address?.country?.toLowerCase()) : true) &&
				(ruleset?.contact?.["juridical"] != null ? ruleset?.contact?.["juridical"]?.includes(contact?.juridical.toLowerCase()) : true) &&
				(ruleset?.contact?.["!countries"] != null ? !ruleset?.contact?.["!countries"]?.includes(`${contact?.address?.country?.toLowerCase()}`) : true)
			);

			if (matched != null) {
				//console.log(visibility.label);
				return matched.articles.includes(article);
			}
		}

		return false;
	}

	const resolveCurrencyRates = async () => {
		const instruction = {};
		state.outgoing.holdings.forEach(holding => {
			const code = `${holding?.security?.currency}/SEK`;
			if (instruction[code] != null) return;

			instruction[code] = {
				"version": 2,
				"obtain": "Wealth.Securities",
				"pipeline": [
					{ $match: { code } },
					{ $replaceRoot: { newRoot: { $first: { $filter: { input: "$historicals", as: "item", cond: { $eq: ["$$item.dv", DateTimeEx.fromParse("2024-12-30").toMilliseconds()] } } } } } }, // TODO: Ska ändras till: period.end.toMilliseconds(), krashar om inget värde finns.
					{ $project: { price: true } },
				]
			}
		});

		const { data } = await Query.send({ instruction });
		const result = Object.keys(data).map(pair => ({
			fxcode: pair,
			fxprice: data[pair]?.pop()?.price ?? 1,
		}));

		return result;
	}

	const resolveCode = transaction => {
		const resolved = features.Localize.string(`local/transactions/list/body/code/${(transaction?.code ?? "unknown").toLowerCase()}`);
		return resolved === "" ? transaction?.code : resolved;
	}

	const resolveTaxName = name => {
		switch (name) {
			case "Svensk Kupongskatt": return "SKS";
			case "Swedish withholding tax": return "SPS";
			case "Foreign withholding tax": return "UKS";
			default: return name;
		}
	}

	// --- --- --- Cover

	const cover = {};
	cover.title = features.Localize.string("local/cover/title", { year: period.start.year });

	// --- --- --- Transactions

	const accountsForTransactions = state.incoming.accounts;

	const initialAccountBalances = {}
	const transactionsRendered = [...transactions]
		.toSorted((a, b) => a.date - b.date)
		.toSorted((a, b) => a.account.localeCompare(b.account))
		.filter(transaction => transaction.status === "OK")
		.map((transaction, index, array) => {

			// If new or account changed.
			if (array.lastAccountName == null || array.lastAccountName !== transaction.account) {
				// Save our last used account name.
				array.lastAccountName = transaction.account ?? "";

				// Calculate initial account balance.
				initialAccountBalances[array.lastAccountName] = {};
				initialAccountBalances[array.lastAccountName].initialAccountBalance = state.incoming.accounts.find(({ name }) => name === array.lastAccountName)?.balanceAccountCurrency ?? 0;

				initialAccountBalances[array.lastAccountName].currentAccountBalance = initialAccountBalances[array.lastAccountName].initialAccountBalance;
				// Render initial account balance.
				initialAccountBalances[array.lastAccountName].initialAccountBalanceRendered = features.Localize.string("local/transactions/list/head/incoming-account-balance", { value: initialAccountBalances[array.lastAccountName].initialAccountBalance });
			}

			// Subtract account balance for each transaction.
			initialAccountBalances[array.lastAccountName].currentAccountBalance += transaction?.trade?.c ?? 0;
			transaction.balanceSystemCurrency = initialAccountBalances[array.lastAccountName].currentAccountBalance;

			return {
				...transaction,

				rendered: {
					status: transaction.status,
					security: securities.find(({ _id }) => _id === transaction?.security)?.name ?? "-",
					businessDate: features.Localize.string("local/transactions/list/body/business-date", { transaction }),
					settlementDate: features.Localize.string("local/transactions/list/body/settlement-date", { transaction }),
					code: resolveCode(transaction),
					typeCode: transaction.typeCode,
					amount: features.Localize.string("local/transactions/list/body/amount", { transaction }),
					price: features.Localize.string("local/transactions/list/body/price", { transaction }),
					tags: features.Localize.string("local/transactions/list/body/tags", { transaction }),
					currencyRate: features.Localize.string("local/transactions/list/body/currency-rate", { transaction }),
					value: features.Localize.string("local/transactions/list/body/value", { transaction }),
					tax1name: resolveTaxName(transaction?.tax1name),
					tax1value: features.Localize.string("local/transactions/list/body/taxes-sum", { value: transaction?.tax1value * transaction?.currencyRateInEffective ?? 0 }),
					tax2name: resolveTaxName(transaction?.tax2name),
					tax2value: features.Localize.string("local/transactions/list/body/taxes-sum", { value: transaction?.tax2value * transaction?.currencyRateInEffective ?? 0 }),
					costs: features.Localize.string("local/transactions/list/body/costs", { value: transaction?.cost1 * transaction?.currencyRateInEffective + transaction?.cost2 * transaction?.currencyRateInEffective }),
					balanceSystemCurrency: features.Localize.string("local/transactions/list/body/account-balance", { transaction }),
				}
			}
		});

	// --- --- --- Summary

	const summary = {};
	summary.period = {
		start: period.start.toFormat({ pattern: "yyyy-MM-dd" }, "sv-SE", "Europe/Stockholm"),
		end: period.end.toFormat({ pattern: "yyyy-MM-dd" }, "sv-SE", "Europe/Stockholm"),
	};
	summary.contact = contact;
	summary.portfolio = {};
	summary.portfolio.number = state.short;
	summary.portfolio.name = state.name;
	summary.portfolio.currency = state.currency.name;
	summary.totals = { incoming: {}, outgoing: {} };

	summary.totals.incoming.head = features.Localize.string("local/summary/totals/incoming/head", summary.period);
	summary.totals.outgoing.head = features.Localize.string("local/summary/totals/outgoing/head", summary.period);

	const incomingAccountBalance = state.incoming.accounts.reduce((total, account) => {
		const accountValue = account.balanceAccountCurrency * account.balanceUnitPrice;
		return total + accountValue;
	}, 0.0);

	summary.totals.incoming["account-balance"] = features.Localize.string("local/summary/totals/incoming/account-balance", { value: incomingAccountBalance });

	const incomingMarketValue = state.incoming.positionMarketValue;
	summary.totals.incoming["market-value"] = features.Localize.string("local/summary/totals/incoming/market-value", { value: incomingMarketValue });

	const incomingPortfolioValue = incomingAccountBalance + incomingMarketValue;
	summary.totals.incoming["portfolio-value"] = features.Localize.string("local/summary/totals/incoming/portfolio-value", { value: incomingPortfolioValue });

	summary.accountsIncoming = state.incoming
		.accounts
		.map(account => ({
			name: features.Localize.string("local/summary/accounts/list/body/name", { account }),
			balance: features.Localize.string("local/summary/accounts/list/body/balance", { account }),
			currency: account.currencyName ?? "-",
			price: features.Localize.string("local/summary/accounts/list/body/price", { account }),
			value: features.Localize.string("local/summary/accounts/list/body/value", { account }),
		}));


	const outgoingAccountBalance = state.outgoing.accounts.reduce((total, account) => {
		const accountValue = account.balanceAccountCurrency * account.balanceUnitPrice;
		return total + accountValue;
	}, 0.0);

	summary.totals.outgoing["account-balance"] = features.Localize.string("local/summary/totals/outgoing/account-balance", { value: outgoingAccountBalance });

	const outgoingMarketValue = state.outgoing.positionMarketValue;
	summary.totals.outgoing["market-value"] = features.Localize.string("local/summary/totals/outgoing/market-value", { value: outgoingMarketValue });

	const outgoingPortfolioValue = outgoingAccountBalance + outgoingMarketValue;
	summary.totals.outgoing["portfolio-value"] = features.Localize.string("local/summary/totals/outgoing/portfolio-value", { value: outgoingPortfolioValue });

	summary.accounts = state.outgoing
		.accounts
		.map(account => ({
			name: features.Localize.string("local/summary/accounts/list/body/name", { account }),
			balance: features.Localize.string("local/summary/accounts/list/body/balance", { account }),
			currency: account.currencyName ?? "-",
			price: features.Localize.string("local/summary/accounts/list/body/price", { account }),
			value: features.Localize.string("local/summary/accounts/list/body/value", { account }),
		}));

	summary.accountsSum = state.outgoing
		.accounts
		.map(({ balanceSystemCurrency }) => balanceSystemCurrency)
		.reduce((t, c) => t + c, 0.0);

	summary.accountsSumRendered = features.Localize.string("local/summary/accounts/list/foot/value", { value: summary.accountsSum });
	summary.balances = state.outgoing
		.accounts
		.map(({ name, balanceSystemCurrency, balanceAccountCurrency }) => ({
			"name": name,
			"incoming-balance": initialAccountBalances[name]?.initialAccountBalance,
			"outgoing-balance": balanceSystemCurrency,
			"rendered": {
				"incoming-balance": features.Localize.string("local/transactions/totals/incoming/value", { value: initialAccountBalances[name]?.initialAccountBalance }),
				"outgoing-balance": features.Localize.string("local/transactions/totals/outgoing/value", { value: balanceAccountCurrency }),
			},
		}));

	// --- --- --- Interests

	const interests = {};

	interests.accountsSummaries = {};
	transactionsRendered.forEach(({ code, tax1value, currencyCode, amount, typeCode }) => {
		if (code !== "Interest") return;
		if (!interests.accountsSummaries[currencyCode]) interests.accountsSummaries[currencyCode] = { credited: 0, debited: 0, tax: 0 };
		if (typeCode === "BR") interests.accountsSummaries[currencyCode].debited += Math.abs(amount);
		else interests.accountsSummaries[currencyCode].credited += Math.abs(amount);

		if (tax1value) interests.accountsSummaries[currencyCode].tax += tax1value;
	});

	for (const name in interests.accountsSummaries)
		interests.accountsSummaries[name].rendered = {
			debited: features.Localize.string("local/interests/accounts/list/body/debited", { value: interests.accountsSummaries[name].debited }),
			credited: features.Localize.string("local/interests/accounts/list/body/credited", { value: interests.accountsSummaries[name].credited }),
			tax: features.Localize.string("local/interests/accounts/list/body/tax", { value: interests.accountsSummaries[name].tax }),
		}

	interests.bondsSummaries = {};
	interests.bondsSummariesTotal = {};
	interests.bondsSummariesTotal.grossPriceInEffective = 0.0;
	interests.bondsSummariesTotal.tax = 0.0;

	transactionsRendered.forEach(({ code, security, tax1value, grossPriceInEffective }) => {
		if (code !== "Coupon") return;

		interests.bondsSummariesTotal.grossPriceInEffective += grossPriceInEffective;
		interests.bondsSummariesTotal.tax += tax1value;

		if (interests.bondsSummaries[security] != null) {
			interests.bondsSummaries[security].grossPriceInEffective += grossPriceInEffective;
			interests.bondsSummaries[security].tax += tax1value ?? 0;
		}

		const { name = "-" } = securities.find(({ _id }) => _id === security) ?? {};
		if (interests.bondsSummaries[security] == null)
			interests.bondsSummaries[security] = { name, grossPriceInEffective, tax: tax1value };
	});

	interests.bondsSummariesTotal.rendered = {
		grossPriceInEffective: features.Localize.string("local/interests/bonds/totals/grossPriceInEffective/value", { value: interests.bondsSummariesTotal.grossPriceInEffective }),
		tax: features.Localize.string("local/interests/bonds/totals/premtax/value", { value: interests.bondsSummariesTotal.tax }),
	};

	for (const key in interests.bondsSummaries)
		interests.bondsSummaries[key].rendered = {
			grossPriceInEffective: features.Localize.string("local/interests/bonds/list/body/gross-price-in-effective", { value: interests.bondsSummaries[key].grossPriceInEffective }),
			tax: features.Localize.string("local/interests/bonds/list/body/tax", { value: interests.bondsSummaries[key].tax }),
		}

	// --- --- --- Dividends

	const dividends = {};
	const compartmentalizeTaxes = ({ name = "", tax = 0, target }) => {
		if (!name) return;
		if (name.toLowerCase() === "swedish withholding tax") target.swedish = tax;
		if (name.toLowerCase() === "foreign withholding tax") target.foreign = tax;
		if (name.toLowerCase() === "svensk kupongskatt") target.coupon = tax;
	}

	let sumAmount = 0;
	let sumPremTax = 0;
	let sumForeignTax = 0;
	let sumCouponTax = 0;

	dividends.list = transactionsRendered
		.filter(({ code }) => code === "Dividend")
		.map(({ security, tax1name, tax1value, tax2name, tax2value, amount, price, currencyRateInEffective }) => {
			const taxes = { swedish: 0, foreign: 0, coupon: 0 };
			compartmentalizeTaxes({ name: tax1name, tax: tax1value, target: taxes });
			compartmentalizeTaxes({ name: tax2name, tax: tax2value, target: taxes });

			// Calculate sums before return
			const amountValue = amount * price * currencyRateInEffective;
			const premTaxValue = taxes.swedish * currencyRateInEffective;
			const foreignTaxValue = taxes.foreign * currencyRateInEffective;
			const couponTaxValue = taxes.coupon * currencyRateInEffective;

			// Sum taxes for totals
			sumAmount += amountValue;
			sumPremTax += premTaxValue;
			sumForeignTax += foreignTaxValue;
			sumCouponTax += couponTaxValue;

			return {
				name: securities.find(({ _id }) => _id === security)?.name ?? "-",
				amount: amount * price * currencyRateInEffective,
				premTax: taxes.swedish * currencyRateInEffective,
				foreignTax: taxes.foreign * currencyRateInEffective,
				couponTax: taxes.coupon * currencyRateInEffective,
			}
		})
		.toGrouped({
			group: "name",
			sums: ["amount", "premTax", "foreignTax", "couponTax"],
		})
		.map(({ name, amount, premTax, foreignTax, couponTax }) => ({
			name,
			amount: features.Localize.string("local/dividends/list/body/amount", { value: amount }),
			premTax: features.Localize.string("local/dividends/list/body/premtax", { value: premTax }),
			foreignTax: features.Localize.string("local/dividends/list/body/foreigntax", { value: foreignTax }),
			couponTax: features.Localize.string("local/dividends/list/body/coupontax", { value: couponTax }),
		}));

	const totalValues = {
		sumAmount: features.Localize.string("local/dividends/totals/dividents/value", { value: sumAmount ?? 0.0 }),
		sumPremTax: features.Localize.string("local/dividends/totals/premtax/value", { value: sumPremTax ?? 0.0 }),
		sumForeignTax: features.Localize.string("local/dividends/totals/foreigntax/value", { value: sumForeignTax ?? 0.0 }),
		sumCouponTax: features.Localize.string("local/dividends/totals/coupontax/value", { value: sumCouponTax ?? 0.0 }),
	};

	dividends.list.forEach(item => {
		item.sumAmount = totalValues.sumAmount ?? 0.0;
		item.sumPremTax = totalValues.sumPremTax ?? 0.0;
		item.sumForeignTax = totalValues.sumForeignTax ?? 0.0;
		item.sumCouponTax = totalValues.sumCouponTax ?? 0.0;
	});

	// --- --- --- Holdings

	const holdings = {};
	holdings.currencyRates = await resolveCurrencyRates();
	holdings.list = [
		...state.outgoing
			.holdings
			.map(({ security, amount, marketTradeAmount, marketValue }) => ({
				name: security?.name ?? "-",
				amount: features.Localize.string("local/holdings/list/body/amount", { value: amount }),
				price: features.Localize.string("local/holdings/list/body/price", { value: (security?.price ?? 0) * (security?.multiplier ?? 1) }),
				currency: security?.currency ?? "-",
				currencyRate: features.Localize.string("local/holdings/list/body/currency-rate", { value: holdings.currencyRates.find(({ fxcode }) => fxcode === `${security?.currency}/SEK`)?.fxprice ?? 0 }),
				marketValue: features.Localize.string("local/holdings/list/body/market-value", { value: marketValue }),
				marketValueRaw: marketValue,
				marketTradeAmount: features.Localize.string("local/holdings/list/body/market-value", { value: marketTradeAmount }),
				marketTradeAmountRaw: marketTradeAmount,
			})),
	];

	holdings.total = features.Localize.string("local/holdings/list/foot/market-value", { value: holdings.list.map(holding => holding.marketValueRaw).reduce((t, c) => t + c, 0.0) });

	// --- --- --- KU20

	const ku20 = {};
	ku20.accountsSummaries = {};
	ku20.totalSum = 0;
	transactionsRendered.forEach(({ code, tax1value, currencyCode, amount, trade, typeCode }) => {
		if (code !== "Interest") return;
		if (typeCode === "BR") return;
		if (!ku20.accountsSummaries[currencyCode]) ku20.accountsSummaries[currencyCode] = { gross: 0, tax: 0 };
		ku20.accountsSummaries[currencyCode].gross += amount;
		//if (amount > 0) ku20.accountsSummaries[currencyCode].gross += amount;
		if (tax1value) ku20.accountsSummaries[currencyCode].tax += tax1value;
	});

	for (const name in ku20.accountsSummaries) {
		ku20.totalSum += ku20.accountsSummaries[name].gross;
		ku20.accountsSummaries[name].rendered = {
			// Added math trunc, 2025-02-03
			gross: features.Localize.string("local/ku20/accounts/list/body/gross", { value: Math.trunc(ku20.accountsSummaries[name].gross) }),
			tax: features.Localize.string("local/ku20/accounts/list/body/tax", { value: Math.trunc(ku20.accountsSummaries[name].tax) }),

		}
	}

	ku20.visible = articleVisibility.determineVisibility("ku20") && Object.keys(ku20.accountsSummaries).length > 0 && ku20.totalSum > 0;

	// --- --- --- KU21

	const ku21 = {};
	ku21.interests = {};
	ku21.bondsSummaries = {};
	ku21.bondsSummariesTotal = {};
	ku21.bondsSummariesTotal.grossPriceInEffective = 0.0;
	ku21.bondsSummariesTotal.tax = 0.0;

	ku21.interestsSummaries = {};
	transactionsRendered.forEach(({ code, security, tax1value, grossPriceInEffective }) => {
		if (code !== "Coupon") return;

		ku21.bondsSummariesTotal.grossPriceInEffective += grossPriceInEffective;
		ku21.bondsSummariesTotal.tax += tax1value;

		if (ku21.bondsSummaries[security] != null) {
			ku21.bondsSummaries[security].grossPriceInEffective += grossPriceInEffective;
			ku21.bondsSummaries[security].tax += tax1value ?? 0;
		} else {
			const { name = "-" } = securities.find(({ _id }) => _id === security) ?? {};
			ku21.bondsSummaries[security] = { name, grossPriceInEffective: grossPriceInEffective, tax: tax1value };
		}
	});
	// Added math.trunc 2025-02-03
	ku21.bondsSummariesTotal.rendered = {
		grossPriceInEffective: features.Localize.string("local/ku21/bonds/totals/grossPriceInEffective/value", { value: Math.trunc(ku21.bondsSummariesTotal.grossPriceInEffective )}),
		tax: features.Localize.string("local/ku21/bonds/totals/premtax/value", { value: Math.trunc(ku21.bondsSummariesTotal.tax) }),
	};

	for (const key in ku21.bondsSummaries)
		ku21.bondsSummaries[key].rendered = {
			grossPriceInEffective: features.Localize.string("local/ku21/bonds/list/body/gross-price-in-effective", { value: Math.trunc(ku21.bondsSummaries[key].grossPriceInEffective) }),
			tax: features.Localize.string("local/ku21/bonds/list/body/tax", { value: Math.trunc(ku21.bondsSummaries[key].tax) }),
		}

	// Interests

	ku21.transactions = transactionsRendered
		.filter(({ code, tags, type, accruedInterest }) => accruedInterest > 0 && !tags.includes("AvyttradTillISK") && (code === "Sell" || code === "Förfall") && type === "BOND")
		.map(({ faid, security, ...transaction }) => {
			const accruedInterest = transaction.accruedInterest;
			const date = transaction.date;

			return {
				...transaction,

				security: securities.find(({ _id }) => _id === security)?.name ?? "-",
				accruedInterest,
				date,
				rendered: {
					...transaction.rendered,

					accruedInterest: features.Localize.string("local/ku21/interests/list/body/accruedInterest", { value: Math.trunc(accruedInterest) }),
					date: features.Localize.string("local/ku21/interests/list/body/date", { value: date }),
				},
			};
		});

	ku21.interests.totals = features.Localize.string("local/ku21/interests/totals/accruedInterest/value", { value: ku21.transactions.map(({ accruedInterest }) => Math.trunc(accruedInterest)).reduce((p, c) => p + c, 0.0) });
	ku21.visible = articleVisibility.determineVisibility("ku20") && (Object.keys(ku21.bondsSummaries).length > 0 || ku21.transactions.length > 0);

	const ku25 = {};

	ku25.accountsSummaries = {};
	ku25.totalSum = 0;

	//tillagd nu

	ku25.interests = {};

	transactionsRendered.forEach(({ code, tax1value, currencyCode, amount, trade, typeCode }) => {
		if (code !== "Interest") return;
		if (typeCode !== "BR") return;
		if (!ku25.accountsSummaries[currencyCode]) ku25.accountsSummaries[currencyCode] = { gross: 0 };
		ku25.accountsSummaries[currencyCode].gross += amount;
	});

	for (const name in ku25.accountsSummaries) {
		ku25.totalSum += ku25.accountsSummaries[name].gross;
		ku25.accountsSummaries[name].rendered = {
			gross: features.Localize.string("local/ku25/accounts/list/body/gross", { value: Math.trunc(ku25.accountsSummaries[name].gross) }),
		}
	}

	ku25.transactions = transactionsRendered
		.filter(({ code, tags, type, accruedInterest }) => accruedInterest > 0 && !tags.includes("AvyttradTillISK") && (code === "Buy" || code === "Förfall") && type === "BOND")
		.map(({ faid, security, ...transaction }) => {
			const accruedInterest = transaction.accruedInterest;
			const date = transaction.date;

			return {
				...transaction,

				security: securities.find(({ _id }) => _id === security)?.name ?? "-",
				accruedInterest,
				date,
				rendered: {
					...transaction.rendered,

					accruedInterest: features.Localize.string("local/ku25/interests/list/body/accruedInterest", { value: Math.trunc(accruedInterest) }),
					date: features.Localize.string("local/ku25/interests/list/body/date", { value: date }),
				},
			};
		});


	ku25.interests.totals = features.Localize.string("local/ku25/interests/totals/accruedInterest/value", { value: ku25.transactions.map(({ accruedInterest }) => Math.trunc(accruedInterest)).reduce((p, c) => p + c, 0.0) });
	ku25.visible = articleVisibility.determineVisibility("ku25") && Object.keys(ku25.accountsSummaries).length > 0 && ku25.totalSum > 0;

	// --- --- --- KU30

	const ku30 = {};
	ku30.quarters = [1, 2, 3, 4].map(quarter => {
		const marketValue = state?.quarters?.[`q${quarter}`]?.marketValueDirty;

		return {
			quarter,
			marketValue: Math.round(marketValue),
			rendered: {
				marketValue: features.Localize.string("local/ku30/quarters/body/initial-balance", { value: marketValue }),
			},
		}
	});

	ku30.total = ku30.quarters
		.map(({ marketValue }) => Math.round(marketValue), 0.0)
		.reduce((t, c) => t + c, 0.0);


	ku30.deposit = transactionsRendered
		.filter(({ code, tags }) => ["Deposit", "Add"].includes(code) && tags.includes("ISKflytt") === false)
		//.map(({ grossPriceInEffective }) => Math.round(grossPriceInEffective)).reduce((t, c) => t + c, 0.0);
		.map(({ grossPriceInEffective }) => grossPriceInEffective).reduce((t, c) => t + c, 0.0);

	// Quarters + deposits
	const capitalBaseAndDeposits = ku30.total + Math.round(ku30.deposit); //added math.round

	ku30.capitalBase = Math.round(capitalBaseAndDeposits / 4); //added math.round

	//2024 3,62 procent
	ku30.imputedIncome = Math.round(ku30.capitalBase * 0.0362); //added math.round

	ku30.foreignDividendsTax = transactionsRendered
		.filter(({ code }) => code === "Dividend")
		.map(({ tax1name, tax1value, tax2name, tax2value, currencyRateInEffective }) => tax1name.toLowerCase() !== "foreign withholding tax" && tax2name.toLowerCase() !== "foreign withholding tax" ? 0 : (tax1value ?? tax2value ?? 0) * (currencyRateInEffective ?? 1))
		//.reduce((t, c) => Math.round(t + c), 0.0);
		.reduce((t, c) => t + c, 0.0);

	ku30.rendered = {
		total: features.Localize.string("local/ku30/quarters/foot/initial-balance", { value: ku30.total }),
		deposit: features.Localize.string("local/ku30/summary/body/deposit/value", { value: ku30.deposit }),
		capitalBase: features.Localize.string("local/ku30/summary/body/capital-base/value", { value: Math.trunc(ku30.capitalBase) }), //Added math.trunc 2025-02-03
		imputedIncome: features.Localize.string("local/ku30/summary/body/imputed-income/value", { value: Math.trunc(ku30.imputedIncome) }), //Added math.trunc 2025-02-03
		foreignDividendsTax: features.Localize.string("local/ku30/summary/body/foreign-tax-sum/value", { value: Math.trunc(ku30.foreignDividendsTax) }), //Added math.trunc 2025-02-03
	};

	ku30.visible = articleVisibility.determineVisibility("ku30");

	// --- --- --- KU31
	let ku31SumAmount = 0;
	let ku31SumPremTax = 0;
	let ku31SumForeignTax = 0;
	let ku31SumCouponTax = 0;
	
	const ku31 = {};
	ku31.list = transactionsRendered
		.filter(({ code }) => code === "Dividend" || code === "Dividend as shares" || code === "Rabatt Fondavgift" || code === "Rabatt - Återinvesterade fondandelar")
		.map(({ security, tax1name, tax1value, tax2name, tax2value, amount, price, currencyRateInEffective, date }) => {
			const taxes = { swedish: 0, foreign: 0, coupon: 0 };
			compartmentalizeTaxes({ name: tax1name, tax: tax1value, target: taxes });
			compartmentalizeTaxes({ name: tax2name, tax: tax2value, target: taxes });

			// Calc sums before return
			const amountValue = amount * price * currencyRateInEffective;
			const premTaxValue = taxes.swedish * currencyRateInEffective;
			const foreignTaxValue = taxes.foreign * currencyRateInEffective;
			const couponTaxValue = taxes.coupon * currencyRateInEffective;

			// Calc taxes
			ku31SumAmount += Math.round(amountValue);
			ku31SumPremTax += Math.round(premTaxValue);
			ku31SumForeignTax += Math.round(foreignTaxValue);
			ku31SumCouponTax += Math.round(couponTaxValue);

			return {
				date: features.Localize.string("local/ku31/list/body/date", { value: date }),
				name: securities.find(({ _id }) => _id === security)?.name ?? "-",
				amount: features.Localize.string("local/ku31/list/body/amount", { value: amountValue }),
				premTax: features.Localize.string("local/ku31/list/body/premtax", { value: premTaxValue }),
				foreignTax: features.Localize.string("local/ku31/list/body/foreigntax", { value: foreignTaxValue }),
				couponTax: features.Localize.string("local/ku31/list/body/coupontax", { value: couponTaxValue }),
			}
		});

	ku31.totals = {
		ku31SumAmount: features.Localize.string("local/ku31/totals/dividents/value", { value: ku31SumAmount ?? 0 }),
		ku31SumPremTax: features.Localize.string("local/ku31/totals/premtax/value", { value: ku31SumPremTax ?? 0 }),
		ku31SumForeignTax: features.Localize.string("local/ku31/totals/foreigntax/value", { value: ku31SumForeignTax ?? 0 }),
		ku31SumCouponTax: features.Localize.string("local/ku31/totals/coupontax/value", { value: ku31SumCouponTax ?? 0 }),
	};

	ku31.visible = articleVisibility.determineVisibility("ku31") && Object.keys(ku31.list).length > 0;;

	// --- --- --- KU32

	const ku32 = {};
	ku32.transactions = transactionsRendered
		.filter(({ type, code }) => ["stock", "bond", "index", "wnt", "cert", "certsplit", "onot"].includes(type.toLowerCase()) && code === "Sell" || code === "Inlösen" || code === "Förfall")
		.map(({ faid, security, ...transaction }) => {
			const { tags, trade, type, currencyRateInEffective } = transaction;
			const salesAmount = !tags.includes("AvyttradTillISK") && type === "BOND" ? trade.tradeAmountExAccruedInterestAndTax * currencyRateInEffective : trade.c;
			const { soldProfit = 0, recordPurchaseTradeAmount = 0 } = state?.lots?.find(({ transactionId }) => +transactionId === +faid) ?? {};

			return {
				...transaction,

				faid,
				security: securities.find(({ _id }) => _id === security)?.name ?? "-",
				salesAmount,
				recordPurchaseTradeAmount,
				soldProfit,
				rendered: {
					...transaction.rendered,

					amount: features.Localize.string("local/ku32/sales/body/amount", { value: transaction.amount }),
					salesAmount: features.Localize.string("local/ku32/sales/body/sales-amount", { value: Math.trunc(salesAmount) }),
					recordPurchaseTradeAmount: features.Localize.string("local/ku32/sales/body/acquisition-value", { value: Math.round(recordPurchaseTradeAmount)}),
					soldProfit: features.Localize.string("local/ku32/sales/body/profit-loss", { value: Math.trunc(salesAmount) - Math.round(recordPurchaseTradeAmount )}),
				},
			};
		});

	ku32.profits = ku32.transactions.map(({ salesAmount, recordPurchaseTradeAmount }) => Math.trunc(salesAmount) - Math.round(recordPurchaseTradeAmount));
	const ku32profit = ku32.profits.filter(profit => profit > 0).reduce((t, c) => t + c, 0.0);
	const ku32loss = ku32.profits.filter(profit => profit < 0).reduce((t, c) => t + c, 0.0);
	const ku32delta = ku32profit + ku32loss;

	ku32.profit = features.Localize.string("local/ku32/totals/profits/value", { value: ku32profit });
	ku32.loss = features.Localize.string("local/ku32/totals/losses/value", { value: ku32loss });
	ku32.delta = features.Localize.string("local/ku32/totals/delta/value", { value: ku32delta });
	ku32.visible = articleVisibility.determineVisibility("ku32") && Object.keys(ku32.transactions).length > 0;

	// --- --- --- KU40

	const ku40 = {};
	ku40.transactions = transactionsRendered
		.filter(({ type, code }) => ["fund", "etf"].includes(type.toLowerCase()) && code === "Sell")
		.map(({ faid, security, ...transaction }) => {
			const purchaseAmount = state?.lots?.find(({ transactionId }) => +transactionId === +faid)?.recordPurchaseTradeAmount ?? 0;
			const soldAmount = transaction.trade.c ?? 0;
			const profitLoss = soldAmount - purchaseAmount > 0 ? Math.trunc(soldAmount - purchaseAmount) : Math.floor(soldAmount - purchaseAmount);

			return {
				...transaction,

				// Resolve security.
				security: securities.find(({ _id }) => _id === security)?.name ?? "-",

				// Calculated fields.
				purchaseAmount,
				soldAmount,
				profitLoss,

				rendered: {
					...transaction.rendered,

					// Rendered fields.
					purchaseAmount: features.Localize.string("local/ku40/sales/body/purchase-amount", { value: Math.ceil(purchaseAmount) }),
					soldAmount: features.Localize.string("local/ku40/sales/body/sold-amount", { value: Math.trunc(soldAmount) }),
					profitLoss: features.Localize.string("local/ku40/sales/body/profit-loss", { value: profitLoss }),
				},
			};
		});
		

	ku40.profits = ku40.transactions.map(({ profitLoss }) => profitLoss);
	const ku40profit = Math.trunc(ku40.profits.filter(profit => profit > 0).reduce((t, c) => t + c, 0.0));
	const ku40loss = Math.floor(ku40.profits.filter(profit => profit < 0).reduce((t, c) => t + c, 0.0));
	const ku40delta = ku40profit + ku40loss;

	ku40.profit = features.Localize.string("local/ku40/totals/profits/value", { value: ku40profit });
	ku40.loss = features.Localize.string("local/ku40/totals/losses/value", { value: ku40loss });
	ku40.delta = features.Localize.string("local/ku40/totals/delta/value", { value: ku40delta });
	ku40.visible = articleVisibility.determineVisibility("ku40") && Object.keys(ku40.transactions).length > 0;

	// --- --- --- KU41

	const ku41 = {};
	ku41.holdings = state.incoming.holdings.filter(({ security }) => ["fund", "etf"].includes(security?.type?.name?.toLowerCase()));
	ku41.total = features.Localize.string("local/ku41/sales/foot/total", { value: ku41.holdings.map(({ marketTradeAmount }) => Math.trunc(marketTradeAmount * 0.004)).reduce((t, c) => t + c, 0.0) }); 
	ku41.holdings = ku41.holdings.map(({ security, marketTradeAmount, marketValue }) => ({
		security,
		marketTradeAmount,
		marketValue,
		rendered: {
			security: features.Localize.string("local/ku41/sales/body/security", { security }),
			capitalBase: features.Localize.string("local/ku41/sales/body/capital-base", { value: Math.trunc(marketTradeAmount) }),
			template: features.Localize.string("local/ku41/sales/body/template", { value: Math.trunc(marketTradeAmount * 0.004) }),
		},
	}));

	ku41.visible = articleVisibility.determineVisibility("ku41") && Object.keys(ku41.holdings).length > 0;

	// Render data on content.
	const rendered = { cover, state, summary, interests, dividends, holdings, ku20, ku21, ku25, ku30, ku31, ku32, ku40, ku41, transactionsRendered, accountsForTransactions };
	await page.evaluate(({ cover, state, summary, interests, dividends, holdings, ku20, ku21, ku25, ku30, ku31, ku32, ku40, ku41, transactionsRendered: transactions, accountsForTransactions }) => {
		// Allows arrays to be chunked into pages of arrays.
		Array.prototype.rollover = ({ template, initial, last }) => {
			const articleElement = template.cloneNode(true);
			(last ?? initial).after(articleElement);

			return articleElement;
		}

		Array.prototype.toChunks = function ({ initial = 10, subsequent = 10 } = {}) {
			const source = [...this], target = [];

			const splice = size => {
				const list = source.splice(0, size);
				target.push(list);
			}

			if (source.length > 0) splice(initial);
			while (source.length > 0) splice(subsequent);

			return target;
		};

		Array.prototype.toSorted = function (comparison) {
			return this.slice().sort(comparison);
		};

		String.prototype.truncate = function (max) {
			return this.length - 3 > max ? `${this.substring(0, max - 3)} ...` : this;
		};

		const showNone = ({ list, none, table }) => {
			if (list.length === 0) {
				document.querySelector(none).removeAttribute("hidden");
				document.querySelector(table).setAttribute("hidden", "");
			} else {
				document.querySelector(none).setAttribute("hidden", "");
				document.querySelector(table).removeAttribute("hidden");
			}
		}

		// --- --- --- Cover

		document.querySelector(`article[area="cover"] h2`).innerHTML = cover.title;

		// --- --- --- Summary

		// Contact
		document.getElementById("name").innerHTML = summary.contact.name;
		document.getElementById("ssnr").innerHTML = summary.contact.ssnr;
		document.getElementById("address").innerHTML = summary.contact?.address?.addressLine;
		document.getElementById("city").innerHTML = `${summary.contact?.address?.postalCode} ${summary.contact?.address?.city}`;

		// Portfolio
		document.querySelector("[portfolio-period]").innerHTML = `${summary.period.start} - ${summary.period.end}`;
		Array.from(document.querySelectorAll(("[portfolio-number]"))).forEach(element => element.innerHTML = summary.portfolio.number);
		Array.from(document.querySelectorAll(("[portfolio-name]"))).forEach(element => element.innerHTML = summary.portfolio.name);
		document.querySelector("[portfolio-currency]").innerHTML = summary.portfolio.currency;

		// Totals
		document.getElementById("incoming-head").innerHTML = summary.totals.incoming.head;
		document.getElementById("incoming-account-balance").innerHTML = summary.totals.incoming["account-balance"];
		document.getElementById("incoming-market-value").innerHTML = summary.totals.incoming["market-value"];
		document.getElementById("incoming-portfolio-value").innerHTML = summary.totals.incoming["portfolio-value"];

		document.getElementById("outgoing-head").innerHTML = summary.totals.outgoing.head;
		document.getElementById("outgoing-account-balance").innerHTML = summary.totals.outgoing["account-balance"];
		document.getElementById("outgoing-market-value").innerHTML = summary.totals.outgoing["market-value"];
		document.getElementById("outgoing-portfolio-value").innerHTML = summary.totals.outgoing["portfolio-value"];

		// Accounts
		const accountsBodyElement = document.querySelector(`article[area="summary"] div[accounts] table tbody`);
		summary.accounts.forEach(({ name, balance, price, value }) =>
			accountsBodyElement.appendChild(document.createElement("tr")).innerHTML = `
					<td align-left>${name}</td>
					<td align-right>${balance}</td>
					<td align-right>${price}</td>
					<td align-right>${value}</td>
				`
		);

		document.querySelector(`article[area="summary"] div[accounts] table tfoot td:last-child`).innerHTML = summary.accountsSumRendered;

		showNone({
			list: summary.accounts,
			none: `article[area="summary"] div[accounts] div[none]`,
			table: `article[area="summary"] div[accounts] table`,
		});

		// --- --- --- Interests
		const interestsAccountsListElement = document.querySelector(`article[area="interests"] div[accounts] table tbody`);
		for (const name in interests.accountsSummaries) interestsAccountsListElement.appendChild(document.createElement("tr")).innerHTML = `
					<td align-left>${name}</td>
					<td align-right>${interests.accountsSummaries[name].rendered.credited}</td>
					<td align-right>${interests.accountsSummaries[name].rendered.debited}</td>
					<td align-right>${interests.accountsSummaries[name].rendered.tax}</td>
				`;

		showNone({
			list: Object.keys(interests.accountsSummaries),
			none: `article[area="interests"] div[accounts] div[none]`,
			table: `article[area="interests"] div[accounts] table`,
		});

		const interestsBondsListElement = document.querySelector(`article[area="interests"] div[bonds] table tbody`);
		const interestsElement = document.querySelector(`article[area="interests"]`);

		interestsElement.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = interests.bondsSummariesTotal.rendered.grossPriceInEffective;
		interestsElement.querySelector("div[totals] > div:nth-child(2) > div:first-child").innerHTML = interests.bondsSummariesTotal.rendered.tax;

		for (const key in interests.bondsSummaries) interestsBondsListElement.appendChild(document.createElement("tr")).innerHTML = `
					<td align-left>${interests.bondsSummaries[key].name}</td>
					<td align-right>${interests.bondsSummaries[key].rendered.grossPriceInEffective}</td>
					<td align-right>${interests.bondsSummaries[key].rendered.tax}</td>
				`;

		showNone({
			list: Object.keys(interests.bondsSummaries),
			none: `article[area="interests"] div[bonds] div[none]`,
			table: `article[area="interests"] div[bonds] table`,
		});

		// --- --- --- Dividends

		const dividendsElement = document.querySelector(`article[area="dividends"]`);
		const dividendsTemplateElement = dividendsElement.cloneNode(true);

		dividendsTemplateElement.querySelector("div:first-child").remove(); // Remove the title and description block.
		dividendsTemplateElement.querySelector("div:first-child").remove(); // Remove the totals block.
		dividendsTemplateElement.querySelector("div:first-child").remove(); // Remove the totals block.

		// Totals
		dividendsElement.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = dividends?.list[0]?.sumAmount ?? "0,00";
		dividendsElement.querySelector("div[totals] > div:nth-child(2) > div:first-child").innerHTML = dividends?.list[0]?.sumPremTax ?? "0,00";
		dividendsElement.querySelector("div[totals] > div:nth-child(3) > div:first-child").innerHTML = dividends?.list[0]?.sumForeignTax ?? "0,00";
		dividendsElement.querySelector("div[totals] > div:nth-child(4) > div:first-child").innerHTML = dividends?.list[0]?.sumCouponTax ?? "0,00";

		dividends
			.list
			.toSorted((a, b) => a.name.localeCompare(b.name))
			.toChunks({ initial: 28, subsequent: 35 })
			.forEach((dividends, index, array) => {
				// Rollover on each chunk.
				array.lastArticleElement = index === 0 ? dividendsElement : dividends.rollover({
					template: dividendsTemplateElement,
					initial: dividendsElement,
					last: array.lastArticleElement,
				});

				const dividendsListElement = array.lastArticleElement.querySelector("table tbody");
				dividends.forEach(({ name, amount, premTax, foreignTax, couponTax, sumAmount, sumPremTax, sumForeignTax, sumCouponTax }) =>
					dividendsListElement.appendChild(document.createElement("tr")).innerHTML = `
							<td align-left>${name}</td>
							<td align-right>${amount}</td>
							<td align-right>${premTax}</td>
							<td align-right>${foreignTax}</td>
							<td align-right>${couponTax}</td>
						`
				);
			});

		showNone({
			list: dividends.list,
			none: `article[area="dividends"] div[none]`,
			table: `article[area="dividends"] table`,
		});

		// --- --- --- Holdings

		const holdingsElement = document.querySelector(`article[area="holdings"]`);
		const holdingsTemplateElement = holdingsElement.cloneNode(true);
		const holdingsTotal = holdings.total;

		holdings
			.list
			.toSorted((a, b) => a.name.localeCompare(b.name))
			.toChunks({ initial: 30, subsequent: 30 })
			.forEach((holdings, index, array) => {
				// Rollover on each chunk.
				array.lastArticleElement = index === 0 ? holdingsElement : holdings.rollover({
					template: holdingsTemplateElement,
					initial: holdingsElement,
					last: array.lastArticleElement,
				});

				// Apply subtitle.
				array.lastArticleElement.querySelector("[date]").innerHTML = summary.period.end;

				const holdingsListBodyElement = array.lastArticleElement.querySelector("table tbody");
				holdings.forEach(({ name, amount, price, currency, currencyRate, marketValue, profits }) => {
					// Totalts
					// holdingsElement.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = profits;

					holdingsListBodyElement.appendChild(document.createElement("tr")).innerHTML = `
							<td align-left>${name.truncate(35)}</td>
							<td align-right>${amount}</td>
							<td align-right>${price}</td>
							<td align-right>${currency}</td>
							<td align-right>${currencyRate}</td>
							<td align-right>${marketValue}</td>
						`;
				});

				if (index !== array.length - 1)
					return;

				const holdingsListFootElement = array.lastArticleElement.querySelector("tfoot");
				holdingsListFootElement.removeAttribute("hidden");
				holdingsListFootElement.querySelector("[sum]").innerHTML = holdingsTotal;
			});

		showNone({
			list: holdings.list,
			none: `article[area="holdings"] div[none]`,
			table: `article[area="holdings"] table`,
		});

		//--- --- --- KU20

		if (ku20.visible) {
			const ku20AccountsListElement = document.querySelector(`article[area="ku20"] div[accounts] table tbody`);
			for (const name in ku20.accountsSummaries) ku20AccountsListElement.appendChild(document.createElement("tr")).innerHTML = `
				<td align-left>${name}</td>
				<td align-right>${ku20.accountsSummaries[name].rendered.gross}</td>
				<td align-right>${ku20.accountsSummaries[name].rendered.tax}</td>
			`;

			showNone({
				list: Object.keys(ku20.accountsSummaries),
				none: `article[area="ku20"] div[accounts] div[none]`,
				table: `article[area="ku20"] div[accounts] table`,
			});
		} else {
			document.querySelector(`article[area="ku20"]`).setAttribute("hidden", "");
		}

		// --- --- --- KU21

		if (ku21.visible) {
			const ku21Element = document.querySelector(`article[area="ku21"]`);
			ku21Element.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = ku21.bondsSummariesTotal.rendered.grossPriceInEffective;
			ku21Element.querySelector("div[totals] > div:nth-child(2) > div:first-child").innerHTML = ku21.bondsSummariesTotal.rendered.tax;

			const ku21bondsSummaries = document.querySelector(`article[area="ku21"] div[bonds] table tbody`);
			for (const key in ku21.bondsSummaries) ku21bondsSummaries.appendChild(document.createElement("tr")).innerHTML = `
				<td align-left>${ku21.bondsSummaries[key].name}</td>
				<td align-right>${ku21.bondsSummaries[key].rendered.grossPriceInEffective}</td>
				<td align-right>${ku21.bondsSummaries[key].rendered.tax}</td>
			`;

			showNone({
				list: Object.keys(ku21.bondsSummaries),
				none: `article[area="ku21"] div[bonds] div[none]`,
				table: `article[area="ku21"] div[bonds] table`,
			});

			// Interest
			ku21Element.querySelector("div[totals]:nth-child(2) > div:nth-child(1) > div:first-child").innerHTML = ku21.interests.totals;
			ku21Element.querySelector("div[totals]:nth-child(2) > div:nth-child(2) > div:first-child").innerHTML = ku21.transactions.length ?? 0;

			ku21.transactions
				.toSorted((a, b) => a.date - b.date)
				.toChunks({ initial: 24, subsequent: 38 })
				.forEach((transactions, index, array) => {
					// Rollover on each chunk.
					array.lastArticleElement = index === 0 ? ku21Element : transactions.rollover({
						template: ku21templateElement,
						initial: ku21Element,
						last: array.lastArticleElement,
					});

					// Iterate each transaction to list the sale.
					const salesBodyElement = array.lastArticleElement.querySelector("div[sales] table tbody");

					transactions.forEach(({ security, rendered }) => {
						salesBodyElement.appendChild(document.createElement("tr")).innerHTML = `
						<td align-left>${security.truncate(30)}</td>
						<td align-right>${rendered.businessDate}</td>
						<td align-right>${rendered.accruedInterest}</td>
					`;
					});
				});

			showNone({
				list: ku21.transactions,
				none: `article[area="ku21"] div[sales] div[none]`,
				table: `article[area="ku21"] div[sales] table`,
			});

			// const ku21interestsSummaries = document.querySelector(`article[area="ku21"] div[interests] table tbody`);

			// ku21Element.querySelector("div[totals]:nth-child(2) > div:nth-child(1) > div:first-child").innerHTML = ku21.interestsSummariesTotal.rendered.accruedInterest;
			// ku21Element.querySelector("div[totals]:nth-child(2) > div:nth-child(2) > div:first-child").innerHTML = Object.keys(ku21.interestsSummaries).length;

			// for (const key in ku21.interestsSummaries) ku21interestsSummaries.appendChild(document.createElement("tr")).innerHTML = `
			// 	<td align-left>${ku21.interestsSummaries[key].name}</td>
			// 	<td align-right>${ku21.interestsSummaries[key].rendered.date}</td>
			// 	<td align-right>${ku21.interestsSummaries[key].rendered.accruedInterest}</td>
			// `;

			// showNone({
			// 	list: Object.keys(ku21.interestsSummaries),
			// 	none: `article[area="ku21"] div[interests] div[none]`,
			// 	table: `article[area="ku21"] div[interests] table`,
			// });

		} else {
			document.querySelector(`article[area="ku21"]`).setAttribute("hidden", "");
		}

		// KU25

		if (ku25.visible) {
			const ku25AccountsListElement = document.querySelector(`article[area="ku25"] div[accounts] table tbody`);

			const ku25InterestElement = document.querySelector('article[area="ku25"] div[block][sales][interests]')

			const ku25TableElement = document.querySelector('article[area="ku25"] div[block][sales][interests] table tbody')

			const totalsValue = ku25.interests.totals ?? 0;
			const transactionsCount = ku25.transactions.length ?? 0;

			const salesInterestsElement = document.querySelector('div[block][sales][interests]');

			const salesTableBodyElement = salesInterestsElement.querySelector('table tbody');

			ku25.transactions.forEach(({ security, rendered }) => {
				ku25TableElement.appendChild(document.createElement("tr")).innerHTML = `
						<td align-left>${security.truncate(30)}</td>
						<td align-right>${rendered.businessDate}</td>
						<td align-right>${rendered.accruedInterest}</td>
					`;
			});


			// Uppdatera HTML med värdena
			ku25InterestElement.querySelector("div[totals]:nth-child(2) > div:nth-child(1) > div:first-child").innerHTML = totalsValue;
			ku25InterestElement.querySelector("div[totals]:nth-child(2) > div:nth-child(2) > div:first-child").innerHTML = transactionsCount;

			// transactions.forEach(({ security, rendered }) => {
			// 	salesBodyElement.appendChild(document.createElement("tr")).innerHTML = `
			// 			<td align-left>${security.truncate(30)}</td>
			// 			<td align-right>${rendered.businessDate}</td>
			// 			<td align-right>${rendered.accruedInterest}</td>
			// 		`;
			// });


			for (const name in ku25.accountsSummaries) ku25AccountsListElement.appendChild(document.createElement("tr")).innerHTML = `
				<td align-left>${name}</td>
				<td align-right>${ku25.accountsSummaries[name].rendered.gross}</td>
			`;

			showNone({
				list: Object.keys(ku25.accountsSummaries),
				none: `article[area="ku25"] div[accounts] div[none]`,
				table: `article[area="ku25"] div[accounts] table`,
			});
		} else {
			document.querySelector(`article[area="ku25"]`).setAttribute("hidden", "");
		}


		//--- --- --- KU30

		//Quarter
		if (ku30.visible) {
			const ku30quartersElement = document.querySelector(`article[area="ku30"] table[quarters]`);
			const ku30quartersBodyElement = ku30quartersElement.querySelector("tbody");
			ku30.quarters.forEach(({ quarter, rendered }) => ku30quartersBodyElement.querySelector(`tr:nth-child(${quarter}) td:last-child`).innerHTML = rendered.marketValue);
			ku30quartersElement.querySelector("tfoot td[sum]").innerHTML = ku30.rendered.total;

			// Summary
			const ku30summaryElement = document.querySelector(`article[area="ku30"] table[summary]`);
			ku30summaryElement.querySelector(`tbody > tr:nth-child(1) > td:nth-child(2)`).innerHTML = ku30.rendered.deposit;
			ku30summaryElement.querySelector(`tbody > tr:nth-child(2) > td:nth-child(2)`).innerHTML = ku30.rendered.capitalBase;
			ku30summaryElement.querySelector(`tbody > tr:nth-child(3) > td:nth-child(2)`).innerHTML = ku30.rendered.imputedIncome;
			ku30summaryElement.querySelector(`tbody > tr:nth-child(4) > td:nth-child(2)`).innerHTML = ku30.rendered.foreignDividendsTax;
		} else {
			document.querySelector(`article[area="ku30"]`).setAttribute("hidden", "");
		}

		// --- --- --- KU31

		if (ku31.visible) {
			const ku31Element = document.querySelector(`article[area="ku31"]`);
			const ku31TemplateElement = ku31Element.cloneNode(true);

			ku31TemplateElement.querySelector("div:first-child").remove(); // Remove the title and description block.
			ku31TemplateElement.querySelector("div:first-child").remove(); // Remove the totals block.
			ku31TemplateElement.querySelector("div:first-child").remove(); // Remove the totals block.

			// Totals
			ku31Element.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = ku31.totals.ku31SumAmount;
			ku31Element.querySelector("div[totals] > div:nth-child(2) > div:first-child").innerHTML = ku31.totals.ku31SumPremTax;
			ku31Element.querySelector("div[totals] > div:nth-child(3) > div:first-child").innerHTML = ku31.totals.ku31SumForeignTax;
			ku31Element.querySelector("div[totals] > div:nth-child(4) > div:first-child").innerHTML = ku31.totals.ku31SumCouponTax;

			ku31
				.list
				.toSorted((a, b) => a.name.localeCompare(b.name))
				.toChunks({ initial: 27, subsequent: 35 })
				.forEach((ku31, index, array) => {
					// Rollover on each chunk.
					array.lastArticleElement = index === 0 ? ku31Element : ku31.rollover({
						template: ku31TemplateElement,
						initial: ku31Element,
						last: array.lastArticleElement,
					});

					const ku31ListElement = array.lastArticleElement.querySelector("table tbody");
					ku31.forEach(({ name, amount, premTax, foreignTax, couponTax, date }) =>
						ku31ListElement.appendChild(document.createElement("tr")).innerHTML = `
							<td align-left>${name.truncate(33)}</td>
							<td align-right>${date}</td>
							<td align-right>${amount}</td>
							<td align-right>${premTax}</td>
							<td align-right>${foreignTax}</td>
							<td align-right>${couponTax}</td>
						`
					);
				});

			showNone({
				list: ku31.list,
				none: `article[area="ku31"] div[none]`,
				table: `article[area="ku31"] table`,
			});
		} else {
			document.querySelector(`article[area="ku31"]`).setAttribute("hidden", "");
		}

		// --- --- --- KU32

		if (ku32.visible) {
			const ku32element = document.querySelector(`article[area="ku32"]`);
			const ku32templateElement = ku32element.cloneNode(true);
			ku32templateElement.querySelector("div:first-child").remove(); // Remove the title and description block.
			ku32templateElement.querySelector("div:first-child").remove(); // Remove the totals block.

			// Totals
			ku32element.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = ku32.profit;
			ku32element.querySelector("div[totals] > div:nth-child(2) > div:first-child").innerHTML = ku32.loss;
			ku32element.querySelector("div[totals] > div:nth-child(3) > div:first-child").innerHTML = ku32.delta;

			// Sales
			ku32.transactions
				.toSorted((a, b) => a.date - b.date)
				.toChunks({ initial: 24, subsequent: 38 })
				.forEach((transactions, index, array) => {
					// Rollover on each chunk.
					array.lastArticleElement = index === 0 ? ku32element : transactions.rollover({
						template: ku32templateElement,
						initial: ku32element,
						last: array.lastArticleElement,
					});

					// Iterate each transaction to list the sale.
					const salesBodyElement = array.lastArticleElement.querySelector("div[sales] table tbody");
					transactions.forEach(({ security, rendered }) => {
						salesBodyElement.appendChild(document.createElement("tr")).innerHTML = `
						<td align-left>${security.truncate(27)}</td>
						<td align-right>${rendered.businessDate}</td>
						<td align-right>${rendered.amount}</td>
						<td align-right>${rendered.salesAmount}</td>
						<td align-right>${rendered.recordPurchaseTradeAmount}</td>
						<td align-right>${rendered.soldProfit}</td>
					`;
					});
				});

			showNone({
				list: ku32.transactions,
				none: `article[area="ku32"] div[sales] div[none]`,
				table: `article[area="ku32"] div[sales] table`,
			});
		} else {
			document.querySelector(`article[area="ku32"]`).setAttribute("hidden", "");
		}

		// --- --- --- KU40

		if (ku40.visible) {
			const ku40element = document.querySelector(`article[area="ku40"]`);
			const ku40templateElement = ku40element.cloneNode(true);
			ku40templateElement.querySelector("div:first-child").remove(); // Remove the title and description block.
			ku40templateElement.querySelector("div:first-child").remove(); // Remove the totals block.

			// Totals
			ku40element.querySelector("div[totals] > div:nth-child(1) > div:first-child").innerHTML = ku40.profit;
			ku40element.querySelector("div[totals] > div:nth-child(2) > div:first-child").innerHTML = ku40.loss;
			ku40element.querySelector("div[totals] > div:nth-child(3) > div:first-child").innerHTML = ku40.delta;

			// Sales
			ku40.transactions
				.toSorted((a, b) => a.date - b.date)
				.toChunks({ initial: 26, subsequent: 38 })
				.forEach((transactions, index, array) => {
					// Rollover on each chunk.
					array.lastArticleElement = index === 0 ? ku40element : transactions.rollover({
						template: ku40templateElement,
						initial: ku40element,
						last: array.lastArticleElement,
					});

					// Iterate each transaction to list the sale.
					const salesBodyElement = array.lastArticleElement.querySelector("div[sales] table tbody");
					transactions.forEach(({ security, rendered }) => {
						salesBodyElement.appendChild(document.createElement("tr")).innerHTML = `
								<td align-left>${security.truncate(30)}</td>
								<td align-right>${rendered.businessDate}</td>

								<td align-right>${rendered.profitLoss}</td>
							`;
					});
				});

			showNone({
				list: ku40.transactions,
				none: `article[area="ku40"] div[sales] div[none]`,
				table: `article[area="ku40"] div[sales] table`,
			});
		} else {
			document.querySelector(`article[area="ku40"]`).setAttribute("hidden", "");

		}

		// --- --- --- KU41

		if (ku41.visible) {
			const ku41element = document.querySelector(`article[area="ku41"]`);
			const ku41templateElement = ku41element.cloneNode(true);
			ku41templateElement.querySelector("div:first-child").remove(); // Remove the title and description block.
			ku41.holdings
				.toChunks({ initial: 24, subsequent: 38 })
				.forEach((transactions, index, array) => {
					// Rollover on each chunk.
					array.lastArticleElement = index === 0 ? ku41element : transactions.rollover({
						template: ku41templateElement,
						initial: ku41element,
						last: array.lastArticleElement,
					});

					const listBodyElement = array.lastArticleElement.querySelector("table > tbody");
					const listFootElement = array.lastArticleElement.querySelector("table > tfoot");

					// Iterate each transaction to list the sale.
					transactions.forEach(({ rendered }) =>
						listBodyElement.appendChild(document.createElement("tr")).innerHTML = `
									<td align-left>${rendered.security}</td>
									<td align-right>${rendered.capitalBase}</td>
									<td align-right>${rendered.template}</td>
								`
					);

					// Append total if last chunk.
					if (index === array.length - 1)
						listFootElement.querySelector("td:last-child").innerHTML = ku41.total;
					else
						listFootElement.remove();
				});

			showNone({
				list: ku41.holdings,
				none: `article[area="ku41"] div[none]`,
				table: `article[area="ku41"] table`,
			});
		} else {
			document.querySelector(`article[area="ku41"]`).setAttribute("hidden", "");
		}

		// --- --- --- Transactions
		//const transanctionsElement = document.querySelector(`article[area="transactions"]`);

		if (state.type === "ISK") {
			document.querySelector(`article[area="transactions"]`).setAttribute("hidden", "");

		} else {
			const transactionsElement = document.querySelector(`article[area="transactions"]`);
			const transactionsTemplateElement = transactionsElement.cloneNode(true);

			transactionsTemplateElement.querySelector("h2").remove();

			let lastArticleElement = null;
			const uniqueAccountNames = new Set();

			transactions.forEach(transaction => uniqueAccountNames.add(transaction.account));
			accountsForTransactions.forEach(account => uniqueAccountNames.add(account.name));
			debugger

			[...uniqueAccountNames].forEach((name, accountIndex) => {
				const transactionsForAccount = transactions.filter(({ account }) => account === name);
				lastArticleElement = lastArticleElement == null ? transactionsElement : transactions.rollover({
					template: transactionsTemplateElement,
					initial: transactionsElement,
					last: lastArticleElement,
				});

				// Apply account name to title.
				lastArticleElement.querySelector("h4").innerHTML = name;

				// Apply initial account balance. 
				const incomingBalance = summary.accountsIncoming.find(account => account.name === name)?.balance ?? "0,00"
				const outgoingBalance = summary.balances.find(current => current.name === name)?.rendered?.["outgoing-balance"] ?? "?";

				lastArticleElement.querySelector("[totals] [incoming] [value]").innerHTML = incomingBalance;
				lastArticleElement.querySelector("[totals] [outgoing] [value]").innerHTML = outgoingBalance;

				if (incomingBalance !== "?")
					lastArticleElement.querySelector("[incoming-account-balance]").innerHTML = incomingBalance;

				if (incomingBalance.name === "-" || outgoingBalance === "?") lastArticleElement.querySelector("[totals]")?.remove();

				if (incomingBalance === "?") lastArticleElement.querySelector("[totals] [incoming]")?.remove();
				if (outgoingBalance === "?") lastArticleElement.querySelector("[totals] [outgoing]")?.remove();

				if (lastArticleElement.querySelector("[totals] [incoming], [totals] [outgoing]") == null)
					lastArticleElement.querySelector("[totals]")?.remove();

				if (transactionsForAccount.length === 0)
					lastArticleElement.querySelector("div[none]").removeAttribute("hidden");
				else
					lastArticleElement.querySelector("div[none]").setAttribute("hidden", "");

				transactionsForAccount
					.toChunks({ initial: accountIndex === 0 ? 17 : 23, subsequent: 23 })
					.forEach((transactions, index) => {
						// Rollover on each chunk.
						lastArticleElement = index === 0 ? lastArticleElement : transactions.rollover({
							template: transactionsTemplateElement,
							initial: transactionsElement,
							last: lastArticleElement,
						});

						// Apply account name to title.
						if (name === "-") name = "Övrigt";
						lastArticleElement.querySelector("h4").innerHTML = name;

						// Remove the summaries if not first article.
						if (index > 0) lastArticleElement.querySelector("[totals]")?.remove();

						// Iterate each transaction to list the sale.
						const listBodyElement = lastArticleElement.querySelector("table > tbody");
						transactions.forEach(({ rendered, currencyCode }) =>
							listBodyElement.appendChild(document.createElement("tr")).innerHTML = `
								<td align-left>${rendered.businessDate}<br />${rendered.settlementDate}</td>
								<td align-left>${rendered.code}<div>${rendered.security.truncate(30)}</div></td>
								<td align-right>${rendered.amount}</td>
								<td align-right>${rendered.price}<br />${rendered.currencyRate}</td>
								<td align-right>${rendered.tax1value}<br />${rendered.tax2value}</td>
								<td align-right>${rendered.tax1name ?? "-"}<br />${rendered.tax2name ?? "-"}</td>
								<td align-right>${rendered.costs}</td>
								<td align-right>${rendered.value}<br />${currencyCode}</td>
								<td align-right>${rendered.balanceSystemCurrency}</td>
							`
						);
					});
			});

		}



		if (!ku20.visible && !ku21.visible && !ku25.visible && !ku30.visible && !ku31.visible && !ku32.visible && !ku40.visible && !ku41.visible)
			document.querySelector(`article[area="basis"]`).setAttribute("hidden", "");

		// Iterate all articles.
		const pageIndex = [{ name: "" }];
		Array.from(document.querySelectorAll("article:not([hidden]) div[page-nr]")).forEach(pageNrElement => {
			pageIndex.push({ name: "" });
			pageNrElement.innerHTML = pageIndex.length;
		});

	}, rendered);

	await page.evaluate(() => globalThis.done = true);
	return features.Localize.string("local/file", { ...state });
}

translate = `
  sv-se:
    local:
      file: 'Årsbesked 2024 - {short}'
      cover:
        title: Årsbesked 2024

      basis:
        title: Deklarationsunderlag

      summary:
        portfolio:
          period: Period
          number: Depånummer
          name: Depånamn
          currency: Basvaluta

        accounts:
          title: Kontosammanställning
          none: Inga konton att redovisa.
          list:
            head:
              name: Konto
              balance: Saldo
              price: Kurs
              value: Värde

            body:
              name: '{account.name}'
              balance: '{account.balanceAccountCurrency as number minimumfractiondigits:2 maximumfractiondigits:2}'
              price: '{account.balanceUnitPrice as number minimumfractiondigits:2 maximumfractiondigits:2}'
              value: '{account.balanceSystemCurrency as number minimumfractiondigits:2 maximumfractiondigits:2}'

            foot:
              name: Summa
              value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

        totals:
          title: Värdesammanställning

          metrics:
            account-balance: Saldo
            market-value: Marknadsvärde värdepapper
            portfolio-value: Depåvärde total

          incoming:
            head: 'Ingående<br /><span meta>{start}</span>'
            account-balance: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            market-value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            portfolio-value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

          outgoing:
            head: 'Utgående<br /><span meta>{end}</span>'
            account-balance: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            market-value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            portfolio-value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

      interests:
        accounts:
          title: Ränteinkomster
          none: Inga ränteinkomster att redovisa.
          list:
            head:
              account: Konto
              credited: Krediterad
              debited: Debiterad
              premtax: Prel. skatt

            body:
              credited: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
              debited: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
              tax: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

        bonds:
          title: Obligationsräntor
          none: Inga obligationsräntor att redovisa.
          list:
            head:
              security: Värdepapper
              amount: Belopp
              premtax: Prel. skatt

            body:
              gross-price-in-effective: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
              tax: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

          totals:
            grossPriceInEffective:
              value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
              label: Summa belopp
            premtax:
              value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
              label: Summa preliminärskatt

      dividends:
        title: Utdelningar
        none: Inga utdelningar att redovisa.
        totals:
          dividents:
            value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            label: Utdelningar
          premtax:
            value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            label: Preliminärskatt
          foreigntax:
            value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            label: Utländsk källskatt
          coupontax:
            value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            label: Kupongskatt

        list:
          head:
            name: Värdepapper
            amount: Belopp
            premtax: Prel. skatt
            foreigntax: Utländsk källskatt
            coupontax: Kupongskatt

          body:
            amount: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            premtax: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            foreigntax: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            coupontax: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

      holdings:
        title: Depåinnehav
        subtitle: '{start}'
        none: Inga innehav att redovisa.
        list:
          head:
            name: Värdepapper
            amount: Antal
            price: Pris 
            currency: Valuta
            currency-rate: Fx
            market-value: Marknadsvärde *

          body:
            amount: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            price: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            currency-rate: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            market-value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

          foot:
            name: Summa
            market-value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

        note: '* Marknadsvärdet inkluderar upplupen ränta.'

      ku20:
        accounts:
          title: Ränteinkomster
          subtitle: Deklarationsunderlag
          description: Skattskyldigheten för ränteinkomster följer den så kallade kontantprincipen och ska beskattas för det år då räntan kan disponeras. Kontrolluppgift om ränteinkomster har lämnats till Skatteverket. Inrapporterad ränta avser både kontoränta och eventuell ränta från reverser och andra fordringar.
          none: Inga ränteinkomster att redovisa.
          list:
            head:
              account: Konto
              gross: Bruttoränta
              premtax: Prel. skatt

            body:
              gross: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              tax: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

      ku25:
        accounts:
          title: Ränteutgifter
          subtitle: Deklarationsunderlag
          description: För ränteutgifter gäller en strikt kontantprincip och kontrolluppgift om betald och för året avdragsgill ränta har lämnats till Skatteverket.  
          none: Inga ränteutgifter att redovisa.
          list:
            head:
              account: Konto
              gross: Bruttoränta
              premtax: Prel. skatt

            body:
              gross: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              tax: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            
        interests:
          none: Inga räntor att redovisa.
          subheading: Ränta betald vid köp
          list:
            head:
              security: Värdepapper
              date: Datum
              interest: Ränta

            body:
              accruedInterest: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              date: '{value as datetime datestyle:short}'

          totals:
            accruedInterest:
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              label: Summa ränta
            accruedInterestLength:
              label: Antal räntor	  

      ku21:
        bonds:
          title: Ränteinkomster 
          subtitle: Deklarationsunderlag
          description: Skattskyldigheten för ränteinkomster på obligationer följer den så kallade kontantprincipen och ska beskattas för det år då räntan kan disponeras. Kontrolluppgift om ränteinkomster på obligationer har lämnats till Skatteverket. Nedan redovisar vi inrapporterad ränteutbetalning i form av kuponger samt erhållen ränteersättning vid försäljning av obligationer.
          none: Inga obligationsräntor att redovisa.
          subheading: Obligationsräntor
          list:
            head:
              security: Värdepapper
              amount: Belopp
              premtax: Prel. skatt

            body:
              gross-price-in-effective: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              tax: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

          totals:
            grossPriceInEffective:
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              label: Summa belopp
            premtax:
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              label: Summa preliminärskatt
           
        interests:
          none: Inga räntor att redovisa.
          subheading: Ränta erhållen vid försäljning
          list:
            head:
              security: Värdepapper
              date: Datum
              interest: Ränta

            body:
              accruedInterest: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              date: '{value as datetime datestyle:short}'

          totals:
            accruedInterest:
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
              label: Summa ränta
            accruedInterestLength:
              label: Antal räntor


      ku30:
        title: Schablonbeskattning ISK
        subtitle: Deklarationsunderlag
        description: Tillgångar som förvaras på ett investeringssparkonto schablonbeskattas och kontrolluppgift om schablonintäkt på investeringssparkonto har lämnats till Skatteverket. Schablonintäkten beräknas genom att ett kapitalunderlag multipliceras med statslåneräntan per den 30 november året före beskattningsåret (2,62 % år 2023) + 1 procentenhet. Kapitalunderlaget beräknas till en fjärdedel av värdet av tillgångarna på investeringssparkontot vid ingången av varje kvartal, insättningar till depån under året samt värdet av överföring av värdepapper. Schablonintäkten beskattas med 30 procent i inkomstslaget kapital.
        quarters:
          title: Per kvartal
          head:
            quarter: Kvartal
            initial-balance: Ingående värde

          body:
            initial-balance: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

          foot:
            quarter: Summa
            initial-balance: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

        summary:
          title: Summering
          body:
            deposit:
              label: Totala insättningar under året
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

            capital-base:
              label: Kapitalunderlag
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

            imputed-income:
              label: Schablonintäkt
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

            foreign-tax-sum:
              label: 'Summa utländsk skatt *'
              value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

          note: '* Har du har betalat utländsk skatt på utdelningar eller på inkomster på ett investeringssparkonto beräknar Skatteverket automatiskt hur mycket avräkning för utländsk skatt som du kan få från den svenska skatten.'

      ku31:
        title: Utdelningar m.m
        subtitle: Deklarationsunderlag
        description: Utdelning lämnas vanligen med kontanta pengar, men kan även avse annan egendom eller förmån så som till exempel fondavgiftsrabatter. Ytterligare exempel är utdelningar i form av aktier i annat bolag eller andra värdepapper. Även utbetalning till aktieägarna vid minskning av aktiekapitalet, om minskningen genomförs utan indragning av aktier klassas som en utdelning. Nedan kontrolluppgifter har lämnats till Skatteverket.	
        none: Inga utdelningar att redovisa.
        totals:
          dividents:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Utdelningar
          premtax:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Preliminärskatt
          foreigntax:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Utländsk källskatt
          coupontax:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Kupongskatt

        list:
          head:
            date: Datum
            name: Värdepapper
            amount: Belopp
            premtax: Prel. skatt
            foreigntax: Utländsk källskatt
            coupontax: Kupongskatt

          body:
            date: '{value as datetime datestyle:short}'
            amount: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            premtax: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            foreigntax: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            coupontax: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

      ku32:
        title: Avyttring av delägar- och fordringsrätter
        subtitle: Deklarationsunderlag
        description: Vid avyttring av aktier, obligationer, teckningsrätter, inlösenaktier, samt andra tillgångar med liknande konstruktion och verkningssätt, lämnas kontrolluppgifter till Skatteverket. Med avyttring avses försäljning, byte eller därmed jämförlig överlåtelse av tillgångar. Till avyttring räknas även inlösen av delägarrätter och fordringsrätter.
        none: Inga avyttringar att redovisa.
        sales:
          head:
            security: Värdepapper
            divestment: Avyttrad
            amount: Antal
            sale-amount: Försäljningsbelopp
            acquisition-value: Omkostnadsbelopp
            profit-loss: Vinst / Förlust

          body:
            sales-amount: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            amount: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            acquisition-value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            profit-loss: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

        totals:
          profits:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Summa vinster

          losses:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Summa förluster

          delta:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Summa totalt
  
      ku40:
        title: Avyttring av fondandelar
        subtitle: Deklarationsunderlag
        description: Inlösen av fondandelar och försäljning av börshandlade fonder (ETF:er) kapitalvinstbeskattas i inkomstslaget kapital. En kontrolluppgift för varje avyttring har rapporterats in till Skatteverket och kapitalvinst/kapitalförlust i SEK har redovisats separat enligt nedan.
        none: Inga avyttringar att redovisa.
        sales:
          head:
            security: Värdepapper
            divestment: Avyttrad
            sale-amount: Försäljningsbelopp
            acquisition-value: Omkostnadsbelopp
            profit-loss: Vinst / Förlust

          body:
            purchase-amount: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            sold-amount: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            profit-loss: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

        totals:
          profits:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Summa vinster

          losses:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Summa förluster

          delta:
            value: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            label: Summa totalt

      ku41:
        title: Schablonbeskattning av fondandelar
        subtitle: Deklarationsunderlag
        description: Skattskyldighet för schablonintäkt på fondandelar inträder den 1 januari varje kalenderår och intäkten beräknas till 0,4 procent av kapitalunderlaget. Kapitalunderlaget utgörs av värdet vid ingången av kalenderåret på de fondandelar som vid denna tidpunkt ägs av den skattskyldige. Schablonintäkten beskattas med 30 procent i inkomstslaget kapital. Nedan kontrolluppgifter har lämnats till Skatteverket.
        none: Ingen schablonbeskattning att redovisa.
        sales:
          head:
            security: Värdepapper
            capital-base: Kapitalunderlag
            template: Schablon

          body:
            security: '{security.name}'
            capital-base: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'
            template: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

          foot:
            security: Summa
            total: '{value as number minimumfractiondigits:0 maximumfractiondigits:0}'

      transactions:
        title: Transaktioner
        none: Inga transaktioner att redovisa.
        notice: |
          <sup>1</sup> SPS = svensk preliminärskatt, UKS = utländsk källskatt, SKS = svensk kupongskatt.<br />
          <sup>2</sup> Avser valutakurs.<br />
          <sup>*</sup> Vi visar endast två decimaler.

        totals:
          incoming:
            value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            label: Ingående kontosaldo

          outgoing:
            value: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            label: Utgående kontosaldo

        list:
          head:
            business-date: Affärsdatum
            settlement-date: Likviddatum
            type: Transaktonstyp
            security: Värdepapper
            amount: Antal
            price: Pris
            fx: Fx<sup>2</sup>
            taxes-sum: Skatt
            taxes-type: Skattyp<sup>1</sup>
            costs: Avgifter
            value: Värde
            currency-code: Valuta
            account-balance: Kontosaldo
            incoming-account-balance: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            outgoing-account-balance: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'

          body:
            business-date: '{transaction.date as datetime datestyle:short}'
            settlement-date: '{transaction.settlement.d as datetime datestyle:short}'
            code:
              unknown: Okänd
              add: Överföring IN
              buy: Köp
              coupon: Kupongränta
              deposit: Insättning
              dividend: Utdelning
              exchange: Utbyte
              interest: Ränta
              issue: Tilldelning
              performance fee: Prestationsbaserad avgift
              quesada service fee: Quesda service avgift
              remove: Överföring UT
              sell: Sälj
              subscription: Nyteckning
              withdrawal: Uttag
            
            amount: '{transaction.amount as number minimumfractiondigits:2 maximumfractiondigits:2}'
            price: '{transaction.price as number minimumfractiondigits:2 maximumfractiondigits:2}'
            currency-rate: '{transaction.currencyRateInEffective as number minimumfractiondigits:2 maximumfractiondigits:2}'
            taxes-sum: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            costs: '{value as number minimumfractiondigits:2 maximumfractiondigits:2}'
            value: '{transaction.trade.c as number minimumfractiondigits:2 maximumfractiondigits:2}'
            account-balance: '{transaction.balanceSystemCurrency as number minimumfractiondigits:2 maximumfractiondigits:2}'

      index:
        summary: Sammanfattning
        holdings: Depåinnehav
        interests: Räntor
        dividents: Utdelningar
        transactions: Transaktioner
        ku20: KU20
        ku21: KU21
        ku25: KU25
        ku30: KU30
        ku31: KU31
        ku32: KU32
        ku40: KU40
        ku41: KU41

      footer:
        page: Sida {nr}
        address: |
          +46 35 - 299 50 00
          info@wictorfamilyoffice.com
          www.wictorfamilyoffice.com
`
