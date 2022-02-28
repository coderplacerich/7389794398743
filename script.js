await octokit.request('GET /repos/{owner}/{repo}', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('PATCH /repos/{owner}/{repo}', {
  owner: 'coderplacerich',
  repo: '7389794398743',
  name: 'name'
})

await octokit.request('DELETE /repos/{owner}/{repo}', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('PUT /repos/{owner}/{repo}/automated-security-fixes', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('DELETE /repos/{owner}/{repo}/automated-security-fixes', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('GET /repos/{owner}/{repo}/codeowners/errors', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('GET /repos/{owner}/{repo}/contributors', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('POST /repos/{owner}/{repo}/dispatches', {
  owner: 'coderplacerich',
  repo: '7389794398743',
  event_type: 'event_type'
})

await octokit.request('GET /repos/{owner}/{repo}/languages', {
  owner: 'coderplacerich',
  repo: '7389794398743'
})

await octokit.request('GET /repos/{owner}/{repo}/tags', {
 owner: 'coderplacerich',
 repo: '7389794398743'
})

await octokit.request('GET /repos/{owner}/{repo}/teams', {
 owner: 'coderplacerich',
 repo: '7389794398743'
})

await octokit.request('GET /repos/{owner}/{repo}/topics', {
 owner: 'coderplacerich',
 repo: '7389794398743'
})

await octokit.request('PUT /repos/{owner}/{repo}/topics', {
 owner: 'coderplacerich',
 repo: '7389794398743',
  names: [
    'names'
  ]
})
