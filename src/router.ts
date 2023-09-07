// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/post`
  | `/post/:postID`
  | `/profile`
  | `/profile/:userID`
  | `/route`
  | `/route/:id`

export type Params = {
  '/post/:postID': { postID: string }
  '/profile/:userID': { userID: string }
  '/route/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
