import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays, MessageSquare } from "lucide-react"



export const requestStatusChange = () => {


    return (
        <Dialog >
            <Button render={<DialogTrigger />} className="h-11 w-full rounded-xl">
                Update status
            </Button>

            <DialogContent className="sm:max-w-sm rounded-2xl">
                <form >
                    <DialogHeader>
                        <DialogTitle className="text-xl font-bold">Rental Request</DialogTitle>
                        <DialogDescription className="sr-only">
                            Fill out the form below to submit your rental request.
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="py-4 gap-5">

                        <Field>
                            <Label htmlFor="moveInDate" className="flex items-center gap-2 text-sm font-medium">
                                <CalendarDays className="size-4 text-muted-foreground" />
                                Move-in Date
                            </Label>

                        </Field>

                        <Field>
                            <Label htmlFor="message" className="flex items-center gap-2 text-sm font-medium">
                                <MessageSquare className="size-4 text-muted-foreground" />
                                Message to Landlord (Optional)
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Introduce yourself or ask questions..."
                                className="min-h-28 rounded-xl resize-none"
                            />

                        </Field>
                    </FieldGroup>

                    <DialogFooter className="gap-2 sm:gap-3">
                        <Button render={<DialogClose />} type="button" variant="outline" className="h-11 flex-1 rounded-full">
                            Cancel
                        </Button>
                        <Button type="submit" className="h-11 flex-1 rounded-full font-semibold">
                            {"Submit"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}