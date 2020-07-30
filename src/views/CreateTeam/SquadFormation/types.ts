import { IPlayer } from '../../../shared/interfaces/player'
import { Formation, Team } from '../../../shared/interfaces/team'

export interface IProps {
	formation: Formation
	team: Team
	selectPlayer: (player: IPlayer) => void
}
