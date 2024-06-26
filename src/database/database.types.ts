export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          id: number
          name: string
          data: Json | null
        }
        Insert: {
          id?: never
          name: string
          data?: Json | null
        }
        Update: {
          id?: never
          name?: string
          data?: Json | null
        }
      },
      notes: {
        Row: {
          id: number
          content: string,
          author_id: number,
          data: Json | null
        }
        Insert: {
          id?: never
          name: string
          author_id: number
          data?: Json | null
        }
        Update: {
          id?: never
          name?: string
          author_id?: number,
          data?: Json | null
        }
      }
    }
  }
}